import {createStore, combineReducers, applyMiddleware} from 'redux';
import {productReducer} from './reducer/productReducer'
import {cartReducer} from './reducer/cartReducer'
import {postReducer} from './reducer/postReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    postReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;