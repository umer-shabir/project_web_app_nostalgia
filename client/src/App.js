// In this file we have the functional component of our app

// Dependencies
import React, { useState, useEffect } from 'react';

// The UI that we use in this application is @material-ui, it allows to create nice looking applications without a lot of styling when working with React
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

// Importing Posts and Form components into our App
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import nostalgia from './images/nostalgia.jpg';

// This is the functional component which returns...
const App = () => {

    // With useState we pass the current id and set current id over to the form and posts components
    const [currentId, setCurrentId] = useState(0);

    // useDispatch allows to dispatch an action
    const dispatch = useDispatch();

    // To style our App component with CSS using classNames
    const classes = useStyles();
  
    // The useEffect allows to perform fetching data and directly updating the DOM. It accepts two arguments, first is a function inside which we use disptach to get posts and second is the dependency array
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    // The main page of the front-end application, with title placed inside the AppBar, Form and Posts inside the Container and Grid
    return (
        // The JSX of the App component(Main Page)
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Nostalgia</Typography>
                <img className={classes.image} src={nostalgia} alt="icon" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

// Exporting the App component so that it can be used in index.js file
export default App;