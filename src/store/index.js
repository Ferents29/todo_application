import {combineReducers, createStore} from "redux";
import {todoReducer} from "./titleReducer";

const rootReducer = combineReducers({todoReducer})

export const store = createStore(rootReducer)