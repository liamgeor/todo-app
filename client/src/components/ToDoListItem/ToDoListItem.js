import React from 'react'

const ToDoListItem = ({item}) => {
    return (
        <div>
            <p>{item.title}</p>
            <p>{item.message}</p>
        </div>
    )
}

export default ToDoListItem
