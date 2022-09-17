// The component for the Posts

import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

// With the help of Selectors we can fetch the data from global redux store or state
import { useSelector } from 'react-redux';

// Posts uses the Post component for that reason we import it here
import Post from './Post/Post';
import useStyles from './styles';

// Posts function returns the posts on the web page for the users to read
const Posts = ({ setCurrentId }) => {
  
  // Inside the useSelector we have a callback function as a parameter, where we get access to the whole global redux state and return posts
  const posts = useSelector((state) => state.posts);

  // To style our Posts component with CSS using classNames
  const classes = useStyles();

  return (
    // Circular Progress is the loading spinner. If there are no posts, the circular progress will be displayed and if there are posts then the user can see posts on the web page
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;