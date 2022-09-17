// All actions towards the backend are done using redux and we dispatch these actions
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// Importing everything from the actions as api
import * as api from '../api/index.js';

// Action Creators are functions that return actions. In the arrow function we declare an action which is an object and must have the type property and payload. Payload is the data where we store the posts. We are using asyncrhronous data, which means that to fetch, create, update posts some time has to pass, for that we have to use redux thunk. Redux thunk allows to specifty an additional arrow function which takes dispatch as a property. Instead of returning the action we have to disptach it

// Action to get posts. In the try block, we fetch all the data from the api fetchPosts function and then disptach it through action.payload
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action to create posts, inside the try block we get the data from api createPost, it makes a post api request to the backend server
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action to update posts, in this asynchronous action we receive the id and post. Inside the try block we make the api request to update the post. The api request returns an updated post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action to like posts, similar to the update post action, we make the api request to like the post which updates the number of likes on that post using the id
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action to delete posts, it takes the id as parameter, delete post request is sent through the api with the id to delete a post from the database
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};