import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as home from './home/reducer'

 const store = createStore(
    combineReducers({...home}),
    applyMiddleware(thunk)
)
export default store
