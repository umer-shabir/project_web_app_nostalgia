// The combineReducer function turns an object whose values are different into a single reducing function that can be passed to createStore
import { combineReducers } from 'redux';

import posts from './posts';

// Exporting it as a function to be used inside createStore. Inside the object we have individual reducer "posts"
export const reducers = combineReducers({ posts });