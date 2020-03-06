import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import thunkMiddleware from 'redux-thunk'


const store = createStore(reducer,applyMiddleware(thunkMiddleware));
// const store = createStore(reducer);

export default store