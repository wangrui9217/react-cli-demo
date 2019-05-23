import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as home from './home/reducer'


const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

 const store = createStore(
    combineReducers({...home}),
     enhancer
)
export default store
