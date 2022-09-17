// Dependencies that we need 
import express from "express"; //Express to use as a framework for creating the routing
import bodyParser from "body-parser"; // Body-Parser to send posts requests
import mongoose from "mongoose"; // Mongoose to create models for the posts
import cors from 'cors'; // Cors to enable cross origin requests
import dotenv from 'dotenv'; // dotenv is used to read the enviromental variables

import postRoutes from './routes/posts.js'; // Importing the router to connect routes
 
// Initializing the app for express function
const app = express();
dotenv.config();

// Using methods on the app instance such as setting up Body-Parser so that it can properly send our requests, limit is set to 30mb because some images that we might send can be large in size, and calling cors as a function
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Using express middleware to connect routes to our application. Every route inside of the postRoutes is going to start with '/posts'
app.use('/posts', postRoutes);

// The PORT that we are going to use to run our server, PORT value can be specified in the .env (enviromental variables) file. By default the server will run on PORT 5000
const PORT = process.env.PORT || 5000;

// Mongoose is used to connect our server application with a real database, such as MongoDB. It is a function that accepts two parameters, first is the CONNECTION_URL (String to connect to the database has to be specified in the .env (enviromental variables) file), second is the object with the options UseNewUrlParser and UseUnifiedTopology set to true (these are not necessary but are used to avoid warnings in the console). If our connection is successful to database, we call app.listen method which accepts PORT and a function as a paramater, and if connection fails it will consolge log the error
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));