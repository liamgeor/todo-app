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
    console.log("IN API")
    return axios.post(url, newList);
}

export const deleteList = (id) =>{
    return axios.delete(`${url}/${id}`);
}

export const addListItem = (id, itemData) =>{
    return axios.patch(`${url}/${id}`, itemData);
}