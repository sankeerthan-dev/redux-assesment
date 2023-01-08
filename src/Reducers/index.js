import { combineReducers } from "redux";
import {createStore} from 'redux'
import auth from "./authReducter";
const rootReducer= combineReducers({ auth })

const store=createStore(rootReducer)
export default store
