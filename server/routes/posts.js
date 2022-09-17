// Routes for our back-end application
import express from 'express';

// Importing functions for the routes from the controllers
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

// Setting up the router
const router = express.Router();

// Here we add all the routes for the posts functions from the front-end, the first paramater is the path and the second parameter is the callback function that is going to be executed once user visits the route. The callback functions are defined in controllers
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;