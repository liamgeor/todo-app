
import {React, useState} from 'react'
import { useSelector} from 'react-redux';
import TodoList from '../TodoList/TodoList.js'
import AddItem from '../AddItem/AddItem.js';

const TodoLists = () => {

    const [showAddList, setShowAddList] = useState(false);

    const lists = useSelector((state) => state.lists);


    const toggleAddList = () =>{
        setShowAddList(!showAddList);
    }

    return (
        <div className="flex flex-row p-5 items-center">
            {lists.map((list) =>
                <TodoList key={list._id} list={list}/>
            )}
            {!showAddList && <button className="border-1 border-black shadow bg-gray-400 hover:bg-gray-800 rounded p-3 m-3 text-white h-1/2 " onClick={toggleAddList} text="Add List">+</button>}
            {showAddList && <AddItem toggle={toggleAddList}/>}
        </div>
    )
}

export default TodoLists
