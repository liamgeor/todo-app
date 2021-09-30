import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

/*
    Index.js is where the App component is called
    Creates the store variable from reducers to maintain redux states
    Must render the App component wrapped in a Provider component to use redux states
*/

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>
    ,
    document.getElementById('root'));