import * as api from '../api/index.js';
import {FETCH_ALL, CREATE, UPDATE, LIKE, DELETE} from '../constants/actionTypes.js'

/*
    These are the actions called from the web page in order to access the api and preform dispatch operations on the state
    The api method will change things in backend while the dispatch is used to update the frontend simultaneously 
*/


//gets all todo lists
export const getLists = () => async (dispatch) =>{
    try{
        const{data} = await api.fetchLists();
        await dispatch({type: FETCH_ALL, payload: data})
    }catch(error){
        console.log(error);
    }
}


//adds new todo list
export const addList = (list) => async (dispatch) =>{
    console.log(list);
    try{
        const {data} = await api.addList(list);
        dispatch({type: CREATE, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const deleteList = (id) => async (dispatch)=>{
    try{
        await api.deleteList(id);

        dispatch({type: DELETE, payload: id});
    }catch(error){
        console.log(error)
    }
}

export const addListItem = (id, list) => async (dispatch)=>{
    try{
        const {data} = await api.addListItem(id, list)

        dispatch({type: UPDATE, payload: data})
    }catch(error){
        console.log(error);
    }
}