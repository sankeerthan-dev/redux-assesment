import { combineReducers } from "redux";
import {createStore} from 'redux'
import auth from "./authReducter";
import productReducer from "./productReducer";
const rootReducer= combineReducers({ auth,productReducer })

const store=createStore(rootReducer)
export default store
