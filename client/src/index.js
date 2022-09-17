// This is the file where we connect our react application to index.html file

// Dependencies
import React from 'react';

// React-Dom provides an efficient way of managing DOM elements of the web page
import ReactDom from 'react-dom/client';

// Provider keeps track of the store which is the global state. It allows us to access that store from anywhere inside of the app
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

// To set redux we first create the store. createStore takes two different things, first is the reducers and the second thing is compose which is a function inside which we put applyMiddleware and in there we pass thunk
const store = createStore(reducers, compose(applyMiddleware(thunk)));


// Deprecated method
/*ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);*/

// With this we connect to the div with an id of 'root' and also wraping the application with a Provider component
const root = ReactDom.createRoot(document.getElementById('root'))
    root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

