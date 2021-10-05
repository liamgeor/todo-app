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
        await newList.save();
        res.status(201).json(newList);    
    }catch(error){
        
        res.status(409).json({message: error.message})
        
    }
}

export const deleteList = async (req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid List ID');

    await ToDoListMessage.findByIdAndDelete(id);

    res.json({message: 'List deleted'});
}

export const addListItem = async(req,res) =>{
    const {id} = req.params;
    const listItem = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid List ID');


    const updatedList = await ToDoListMessage.findByIdAndUpdate(id, {$push: {"items": listItem}}, {upsert: true, new: true})

    res.json(updatedList);
}

export const updateListItem = async(req, res) =>{
    const {parentID, itemID} = req.params;

    console.log(parentID);
    console.log(itemID);

    const listItem = req.body;

    if(!mongoose.Types.ObjectId.isValid(parentID)) return res.status(404).send('Invalid List ID');

    const updatedList = await ToDoListMessage.findOneAndUpdate({"_id" : parentID, "items._id": itemID}, {$set: {"items.$": listItem}});

    res.json(updatedList);

}
