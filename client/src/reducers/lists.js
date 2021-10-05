import {FETCH_ALL, CREATE, UPDATE, UPDATE_ITEM, DELETE} from '../constants/actionTypes.js'

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
            return [...lists, action.payload];
        case DELETE:
            return lists.filter((list) => list._id !== action.payload);
        case UPDATE:
            return lists.map((list) => list._id == action.payload._id ? action.payload : list);
        case UPDATE_ITEM:
            return lists.map((list) => list._id == action.payload._id ? action.payload : list);
        default:
            return lists;
    }
}