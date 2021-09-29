import {React, useEffect} from 'react'
import AddItem from './components/AddItem.js'
import {getLists} from './actions/lists.js'
import {useDispatch, useSelector} from 'react-redux';

/*
    The App component is the basis for all React projects
    This is where components will be called and swapped around based on user action
*/

const App = () => {

    const dispatch = useDispatch();

    const lists = useSelector((state) => state.lists);


    useEffect(() =>{
        dispatch(getLists());
        console.log(lists)
    }, [dispatch]);



    return (
        <div>
            <h1></h1>
            <AddItem/>
        </div>
    )
}

export default App
