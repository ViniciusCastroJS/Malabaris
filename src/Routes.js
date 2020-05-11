import React, {createContext, useMemo, useState} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/index'
import LoginPage from './pages/LoginPage/index'
import SignIn from './pages/SignIn/index'
import Dashboard from './pages/dashboard'
import SignIn2 from './pages/SignIn2'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './Redux/rootReducer'
import thunk from 'redux-thunk'

export const NewUserContext = createContext();

const store = createStore(rootReducer, applyMiddleware(thunk))

const Routes = () =>{ 

    const initiaState = 
{   name:'',
    email:'',
    price: 0,
    password:'',
    address:'',
    category: '',
    week_day: '',
    day_shift: '',
}

const [NewUser, setNewUser] = useState(initiaState);


    const Memo = useMemo(
        () => ({ NewUser, setNewUser}), [NewUser, setNewUser]
    )

    return( 
        <Provider store={store}>
        <NewUserContext.Provider value={Memo}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/signin2" component={SignIn2}/>
                <Route exact path="/dashboard" component={Dashboard}/>
            </Switch>
        </BrowserRouter>
        </NewUserContext.Provider>
        </Provider>
    );
};
export default Routes