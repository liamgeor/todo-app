import {React, useState} from 'react'
import {addList} from '../../../actions/lists.js'
import {useDispatch} from 'react-redux';


/*
    Component: Input fields in order to create a new todo list
    Params: None
    Creator: Liam George
    Created Date: 9/29/21
*/
const AddItem = ({toggle}) => {
    const dispatch = useDispatch();

    //state variable for newly created list, updated as fields update
    const [listData, setListData] = useState({
        creator: '',
        title: '',
        items: []
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addList(listData)); 
        toggle(); 
    }


    return (
        <div className="bg-white shadow rounded p-3 m-3">
            <div className="flex flex-col">
                <input className="border-1 border-black shadow  rounded px-3 m-3" type="text" placeholder="Title" onChange={(e) => setListData(prevState => ({...prevState, title: e.target.value}))}/>
                <input className="border-1 border-black shadow  rounded px-3 m-3" type="text" placeholder="Creator" onChange={(e) => setListData(prevState => ({...prevState, creator: e.target.value}))}/>   
                <div className="flex flex-row justify-center">
                    <button className="border-1 border-black rounded shadow bg-myGreen hover:bg-myDark px-3 text-white mx-3" onClick={handleSubmit}>Add List</button>
                    <button className="border-1 border-black rounded shadow bg-myGreen hover:bg-myDark px-3 text-white mx-3" onClick={toggle}>Cancel</button>                  
                </div>
            </div>
            
        </div>
    )
}

export default AddItem
