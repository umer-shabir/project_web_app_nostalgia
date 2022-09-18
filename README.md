Project Web Application: Nostalgia

![image](https://user-images.githubusercontent.com/113787259/190888203-a75a7ee1-07c7-498c-b44e-82956b0541fe.png)

Introduction

This is a code repository for the Project Java and Web Development Application called Nostalgia. It is a straightforward social media platform that allows users to share important occasions of their life. It is a CRUD application where the user can create, read, update and delete the posts, additionally the user can also like the posts.

The application is build using MERN stack, The MERN stack consists of Node.js, MongoDB, Express and React. The posts are created in the React front-end web page, the data filled by the user goes to Express server, where it is processed and then directly stored in the MongoDB database.

Setup

To run this application first you need to have Node Js installed: https://nodejs.org/en/

In the \server\.env file, add the connection URL string to connect the application to your MongoDB database before starting.

On the server terminal use the following commands to start the server backend

Server – Terminal A

cd client

npm i

(If there is Conflicting peer dependency error, use "npm i --force" command)

npm start


On the client terminal use the following commands to start the client side

Client - Terminal B

cd client

npm i

(If there is Conflicting peer dependency error, use "npm i --force" command)

npm start
