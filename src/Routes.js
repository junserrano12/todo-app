import React from 'react'
import {Router, Route} from 'react-router'
import {createBrowserHistory} from 'history'
import Home from './page/Home/Home'
import Login from './page/Login/Login'
import Todo from './page/Todo/Todo'

const Routes = () => {
    return (
        <Router history={createBrowserHistory()}>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/login" component={Login} />
        </Router>
    )
}

export default Routes