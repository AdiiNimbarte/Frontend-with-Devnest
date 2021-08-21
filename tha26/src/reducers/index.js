import {nameReducer, mailReducer} from './formReducer' 


import { combineReducers } from "redux";

const rootReducer = combineReducers({
    name: nameReducer,
    email: mailReducer,
});

export default rootReducer;