// Axios is used for making api requests
import axios from 'axios';

// Specifying the url string, connecting to our backend route
const url = 'http://localhost:5000/posts';

// Here we create the arrow functions that makes the axios.get, axios.patch, axios.post and axios.delete call to the url 'http://localhost:5000/posts'. We export these function to be used in other files
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);