// In this file we utilize the schema of Mongoose
import mongoose from 'mongoose';

// Creating a mongoose schema function which has an object. It allows us to create a uniformity to our posts, we specify that each post is going to have these attributee
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// To turn the schema into model we use mongoose.model method with postScheme as a parameter
const PostMessage = mongoose.model('PostMessage', postSchema);

// We are exporting a mongoose model from postMessage file, we will be able to run commands such as find, create, delete and update on this model
export default PostMessage;