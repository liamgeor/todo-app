import {React, useEffect} from 'react'
import Home from './components/Home/Home.js'
import {getLists} from './actions/lists.js'
import {useDispatch} from 'react-redux';

/*
    The App component is the basis for all React projects
    This is where components will be called and swapped around based on user action
*/

const App = () => {

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getLists());
    }, [dispatch]);



    return (
        <div className="h-screen w-100 bg-green-200">
            <Home/>
        </div>
    )
}

export default App
