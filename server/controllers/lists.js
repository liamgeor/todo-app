import ToDoListMessage from '../models/toDoListMessage.js';
import mongoose from 'mongoose';

/*
    The controller is used in the server to connect from the api to the database
    These methods are imported into the routes to save space in the routes page
    They are executed using different route urls
*/

//Gets all the todo lists
export const getLists = async (req, res) =>{
    try{
        const toDoListsMessages = await ToDoListMessage.find();

        res.status(200).json(toDoListsMessages);
    }catch(error){
        res.status(404).json(error.message);
    }
}

//adds a new todo list
export const addList = async (req, res) =>{
    const list = req.body;

    const newList = new ToDoListMessage(list);

    try{
        res.status(201).json(newList);    
    }catch(error){
        res.status(409).json({message: error.message})
    }
}


//WIP add an item to an existing todo list
export const addItem = async (req, res) =>{
    const {id: _id} = req.params;
    const list = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid List ID');

    const updatedList = await ToDoListMessage.findByIdAndUpdate(_id, list, {new: true});

    res.json(updatedList);
}