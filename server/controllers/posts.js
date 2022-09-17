// Inside here we create all the handlers for our routes. If we keep adding all the complex logic for routes inside the routes file, our file for routes will become complicated and hard to read, therefore to simplify that, we use seperate file for the logic inside controllers
import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

// We declare the functions for router.get, router.post, router.delete and router.patch here. Each function has a request and response and a try and catch block to excute the code. The functions are asynchronous, which means that finding something inside of a model takes time, for that reason we add 'await' inside try block. All http status code in requests.status with 2xx are successful, and 4xx are are client errors in the catch block.

// To retrieve the posts that we have currently in the database, this function returns an array of all the post messages
export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// To retrieve a single post from the database, this function returns an post
export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// To create a new post, we use request.body, in the try block we have an asynchronous action to save the new post. It returns the new post
export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// To update post, we use asynchronous function with request and response as parameters. First we extract the id from request.params. To check if the id is a mongoose object id we use if block to check. If the id is valid then the post can be updated
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

// Function to delete a post, we get the id of the post from request.params, and if the id is valid then that post will be deleted
export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

// Function to like a post, it is an async function with request and response, first we get the id, then check if its valid, if the id is valid the like count on the post is updated
export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}

export default router;