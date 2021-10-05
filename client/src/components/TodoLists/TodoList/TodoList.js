import {React, useState} from 'react'
import {useDispatch} from 'react-redux';
import {deleteList} from '../../../actions/lists.js'
import AddListItem from './ToDoListItem/AddListItem/AddListItem.js';
import ToDoListItem from './ToDoListItem/ToDoListItem.js';
import {FaTrashAlt, FaPlus} from 'react-icons/fa'

const TodoList = ({list}) => {

    const [showAddItem, setShowAddItem] = useState(false);
    const [showButtons, setShowButtons] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useDispatch();

    const handleDelete = () =>{
        dispatch(deleteList(list._id))
    }

    const toggleAddItem = () =>{
        setShowAddItem(!showAddItem);
        console.log(list.items)
    }

    const toggleButtons = () =>{
        setShowButtons(!showButtons);
    }

    const toggleIsEditing = () =>{
        setIsEditing(!isEditing);
        setShowButtons(false);
    }

    const updateItem = (item) =>{
        console.log(item.title);
        console.log(item.message);
        toggleIsEditing();
    }


    return (
        <div className=" m-3  shadow rounded bg-gray-200 w-1/6">
            
            <div className="mx-3 border-b-1 border-black">
                <h1>Title: {list.title}</h1>
                <h6 className="text-gray-400 text-sm">Creator: {list.creator}</h6>
            </div>
            
                

            {showAddItem && <AddListItem toggle={toggleAddItem} parent={list}/>}
            <div>
                {list.items.map((item) => (
                    <div key={item._id} className="">
                        <ToDoListItem  item={item} toggleButtons={toggleButtons} />
                    </div>
                )
                )}
                
            </div>
            {showButtons && 
            <div className="my-2">
                <button className="p-3 text-myGreen float-left hover:text-myDark " onClick={toggleAddItem}>
                    <FaPlus/>
                </button>   

                <button className="p-3 text-myGreen float-right hover:text-myDark " onClick={handleDelete}>
                    <FaTrashAlt/>
                </button>
            </div>}
        </div>
    )
}

export default TodoList
