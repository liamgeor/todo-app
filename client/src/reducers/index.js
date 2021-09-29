import {combineReducers} from 'redux';
import lists from './lists.js';

/*
    Reducers act as a state variable accessible from anywhere in the project
    Use for states that may be needed in multiple components
    Don't need to pass state down through components
*/

export default combineReducers({lists})

