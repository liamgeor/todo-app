
import {React, useState} from 'react'
import { useSelector} from 'react-redux';
import TodoList from './TodoList/TodoList.js'
import AddItem from './AddList/AddList.js'

const TodoLists = () => {

    const [showAddList, setShowAddList] = useState(false);

    const lists = useSelector((state) => state.lists);


    const toggleAddList = () =>{
        setShowAddList(!showAddList);
    }

    return (
        <div className="flex flex-row p-5 items-start items-top ">
            {lists.map((list) =>
                <TodoList key={list._id} list={list}/>
            )}
            {!showAddList && <button className="border-1 border-black shadow bg-myGreen hover:bg-myDark rounded m-3 text-white h-8 w-1/6" onClick={toggleAddList} text="Add List">+</button>}
            {showAddList && <AddItem toggle={toggleAddList}/>}
        </div>
    )
}

export default TodoLists
