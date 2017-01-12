/*
* React
*/
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

/*
* Redux
*/
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

/*
* Reducers
*/
const combineReducer = combineReducers({
    form : formReducer
})

/*
* Store
*/
const store = createStore(combineReducer, {}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

/*
* App
*/
import Contact from './routes/Contact'
import App from './App'
import './index.css'

/*
* Render App
*/
render(<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ App } />
      <Route path="/contact" component={ Contact } />
    </Router>
</Provider>, document.getElementById('root'))
