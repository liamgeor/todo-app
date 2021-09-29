import axios from 'axios';

const url = "http://localhost:5000/todo";

/*
    This file is used to make API calls to the backend in order to create/receive/update/delete data
*/

//Gets all todo lists
export const fetchLists = () =>{
    return axios.get(url);
}

//adds a new todo list
export const addList = (newList) =>{
    return axios.post(url, newList);
}