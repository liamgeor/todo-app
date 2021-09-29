import {FETCH_ALL, CREATE, UPDATE, LIKE, DELETE} from '../constants/actionTypes.js'

/*
    Exporting the lists state
    Has a switch to perform different actions dependent on the action type passed in
    Works in conjunction with API calls in order to update information in real time
*/

export default (lists = [], action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE: 
            console.log("Creating");
            console.log(action);
            console.log(lists);
            return [...lists, action.payload];
        default:
            return lists;
    }
}