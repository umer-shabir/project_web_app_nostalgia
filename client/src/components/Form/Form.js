// This is the Form component

// Dependencies
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

// React-file-base64 is used to convert images
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

// Form is functional component which returns the layout of the form on the web page where the user can create and upate posts. Inside the form component we accept the current id and set current id to add the createa and update functionality
const Form = ({ currentId, setCurrentId }) => {

    // Inside the useState object we specifiy the properties with an empty string that the object is going to start with, such as creator, title, message, tags and picture. We use the postData and setPostData in the text fields of the form
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    // Here we fetch the updated posts, it loops over posts and calls a find method on it which finds the specific post with id
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    // useDispatch allows to dispatch an action
    const dispatch = useDispatch();

    // To style our Form component with CSS using classNames
    const classes = useStyles();

    // We use useFffect to populate the values of the form, it accepts two parameters, a callback function and a dependency array. When the post value changes, this function will run
    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    // Function to clear the form's text fields
    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };

    // handlesumbit is a handler function. Once the user clicks submit on the form, this function sends over a post request with all the data the user typed in, if the current id exists then new post will not be created, the current post will only be updated
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId === 0) {
          dispatch(createPost(postData));
          clear();
        } else {
          dispatch(updatePost(currentId, postData));
          clear();
        }
    };
    
    return (
        // The JSX of the Form component
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Create a Nostalgia'}</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;