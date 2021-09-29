import mongoose from 'mongoose';


/*
    The models are basically the database items for MongoDB Atlas Cluster. 
    The db will have lists of these which we can access by their ID
    The schema sets what fields that this type of object should have, sets defaults, etc.
*/


//Schema for a list item, is a subdocument for the todo list
const toDoItemSchema = mongoose.Schema({
    creator: String,
    title: String,
    message: String,
    createdAt:{
        type: Date,
        default: new Date()
    },
    completed:{
        type: Boolean,
        default: false
    },
    parentList: String
});

//Schema for a todo list, which will have list item subdocuments in items array
const toDoListSchema = mongoose.Schema({
    creator: String,
    title: String,
    items: [toDoItemSchema],
    createdAt:{
        type: Date,
        default: new Date()
    },
    completed:{
        type: Boolean,
        default: false
    }
});

const ToDoListMessage = mongoose.model('ToDoListMessage', toDoListSchema);

export default ToDoListMessage;