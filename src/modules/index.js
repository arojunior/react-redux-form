/*
* Redux
*/
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
/*
* Reducers
*/
import Contact from './Contact'
const combineReducer = combineReducers({
    form : formReducer,
    Contact
})

/*
* Store
*/
export const store = createStore(combineReducer, {}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
