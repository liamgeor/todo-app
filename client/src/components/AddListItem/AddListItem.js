import {React, useState} from 'react'
import {useDispatch} from 'react-redux';
import { addListItem } from '../../actions/lists';

const AddListItem = ({toggle, parent}) => {

    const dispatch = useDispatch();

    const [listItem, setListItem] = useState({
        title: '',
        creator: parent.creator,
        message: '',
        parentList: parent._id
    })

    const handleSubmit = () =>{
        console.log(listItem);
        dispatch(addListItem(parent._id, listItem));
        toggle();
    }
    return (
        <div className="flex flex-col">
                <input className="border-1 border-black shadow  rounded px-3 m-3" type="text" placeholder="Title" onChange={(e) => setListItem(prevState => ({...prevState, title: e.target.value}))}/>
                <input className="border-1 border-black shadow  rounded px-3 m-3" type="text" placeholder="Message" onChange={(e) => setListItem(prevState => ({...prevState, message: e.target.value}))}/>   
                <div className="flex flex-row justify-center">
                    <button className="border-1 border-black shadow bg-gray-400 rounded hover:bg-gray-800 px-3 text-white mx-3" onClick={handleSubmit}>Add Item</button>
                    <button className="border-1 border-black shadow bg-gray-400 rounded hover:bg-gray-800 px-3 text-white mx-3" onClick={toggle}>Cancel</button>                  
                </div>
            </div>
    )
}

export default AddListItem
