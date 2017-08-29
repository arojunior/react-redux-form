/*
* Redux
*/
import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
/*
* Reducers
*/
import Contact from './Contact'
const combineReducer = combineReducers({
  form: formReducer,
  Contact
})

/*
* Store
*/
export const store = createStore(combineReducer)
