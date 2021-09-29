import {React, useState} from 'react'
import {addList} from '../actions/lists.js'
import {useDispatch} from 'react-redux';


/*
    Component: Input fields in order to create a new todo list
    Params: None
    Creator: Liam George
    Created Date: 9/29/21
*/
const AddItem = () => {
    const dispatch = useDispatch();

    //state variable for newly created list, updated as fields update
    const [listData, setListData] = useState({
        creator: '',
        title: '',
        items: []
    })

    const handleSubmit = (e) =>{
        console.log(listData)
        e.preventDefault();
        dispatch(addList(listData));  
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Creator" onChange={(e) => setListData(prevState => ({...prevState, creator: e.target.value}))}/>
                <input type="text" placeholder="Title" onChange={(e) => setListData(prevState => ({...prevState, title: e.target.value}))}/>
                <input type="submit" value="Add List"/>
            </form>
        </div>
    )
}

export default AddItem
