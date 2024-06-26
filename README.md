Project Web Application: Nostalgia

![image](https://user-images.githubusercontent.com/113787259/190888203-a75a7ee1-07c7-498c-b44e-82956b0541fe.png)

Introduction

This is a code repository for the Project Java and Web Development Application called Nostalgia. It is a straightforward social media platform that allows users to share important occasions of their life. It is a CRUD application where the user can create, read, update and delete the posts, additionally the user can also like the posts.

The application is build using MERN stack, The MERN stack consists of Node.js, MongoDB, Express and React. The posts are created in the React front-end web page, the data filled by the user goes to Express server, where it is processed and then directly stored in the MongoDB database.

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Setup

To run this application first you need to have Node Js installed: https://nodejs.org/en/

A code editor is required to work with the project files, I recommend the editor Visual Studio Code, from https://code.visualstudio.com/

For database storage we use MongoDB, specifically their cloud Atlas version of mongoDB, the database is hosted on their cloud. Therefore before running the application, setup a mongoDB cluster by registering at https://www.mongodb.com/atlas/database

In the \server\\.env file, add the connection URL string to connect the application to your MongoDB database before starting.

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Server – Terminal

On the server terminal use the following commands to start the server backend

cd server

npm i

(If there is Conflicting peer dependency error, use "npm i --force" command)

npm start

The server will be running on http://localhost:5000/posts

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Client - Terminal

On the client terminal use the following commands to start the client side

cd client

npm i

(If there is Conflicting peer dependency error, use "npm i --force" command)

npm start

The client side React app will start at http://localhost:3000

Make sure to use these commands in the proper directories of the server and client by using cd server or client command in the terminal

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Build/Deploy React Front-end Application

First, in the client\src\api\index.js specify the url string to connect to the back-end server. By default the the React app will send api requests to http://localhost:5000/posts.

To build the Front-end React app use the following command in the client directory (cd client) Terminal

npm run build

This command will generate an optimized production build folder containing static js and css files for the React app. This build folder is used to deploy the applicatiopn on the web.

To deploy the build folder locally, use the following command in the \client\build directory Terminal 

(To get into build directory use cd client\build command)

npx serve

This will deploy the optimized build React app locally on http://localhost:3000/

-------------------------------------------------------------------------------------------------------------------------------------------------------------

Testing Application

To test the application functionality, we can add new posts by filling the Form and clicking the submit button. It will display the newly created post on the webpage as well as store it in the database using express server. To test the update functionaly, we can use the Edit button on each post, which on click will populate the Form with the post's data retrieved from database and the users can then make changes to it and submit it. This will update the current post with the new data. Additionally, the users can like a post which will increase the like count on that post, and using the delete button we can test the functionality to remove a post from the webpage as well as the database.

