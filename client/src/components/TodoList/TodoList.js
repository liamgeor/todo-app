import {React, useState} from 'react'
import {useDispatch} from 'react-redux';
import {deleteList} from '../../actions/lists.js'
import AddListItem from '../AddListItem/AddListItem.js';
import ToDoListItem from '../ToDoListItem/ToDoListItem.js';

const TodoList = ({list}) => {

    const [showAddItem, setShowAddItem] = useState(false);

    const dispatch = useDispatch();

    const handleDelete = () =>{
        dispatch(deleteList(list._id))
    }

    const toggleAddItem = () =>{
        setShowAddItem(!showAddItem);
        console.log(list.items)
    }


    return (
        <div className="p-3 m-3 shadow rounded bg-white">
            <h1>Title: {list.title}</h1>
            <h6>Creator: {list.creator}</h6>
            <div className="flex flex-row my-3">
                <button className="border-1 border-black shadow bg-gray-400 rounded px-3 mx-3 text-white hover:bg-gray-800" onClick={toggleAddItem}>Add Item</button>
                <button className="border-1 border-black shadow bg-gray-400 rounded px-3 mx-3 text-white hover:bg-gray-800" onClick={handleDelete}>Delete</button>
            </div>
            {showAddItem && <AddListItem toggle={toggleAddItem} parent={list}/>}
            <div>
                {list.items.map((item) => <ToDoListItem key={item._id} item={item} />)}
            </div>
            
        </div>
    )
}

export default TodoList
