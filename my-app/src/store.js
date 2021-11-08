import {combineReducers, createStore, applyMiddleware} from "redux";
import { GetUsers,RegisterReducer} from './redux/reducer/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    getUsers:GetUsers,
    register: RegisterReducer
});

const initialState = {};
const middleware = [thunk];

const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;