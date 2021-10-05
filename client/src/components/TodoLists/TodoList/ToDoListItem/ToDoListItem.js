import {React, useState} from 'react'


const ToDoListItem = ({item}) => {

    const [showEditItem, setShowEditItem] = useState(false);

    const toggleEditItem = () =>{
        setShowEditItem(!showEditItem)
    }

    return (
        <div className="shadow border-1 mx-3 rounded my-3 hover:bg-gray-300 cursor-pointer">
                {showEditItem && <label>{item.title}</label>}
                <div  onClick={toggleEditItem}>
                    <p>{item.title}</p>
                    <p>{item.message}</p>
                </div>
            
        </div>
    )
}

export default ToDoListItem
