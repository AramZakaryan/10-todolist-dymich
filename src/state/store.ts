import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./todolistsReduser";
import {tasksReducer} from "./tasksReduser";


export type roofReducerType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers(
    {
        todolists: todolistsReducer,
        tasks: tasksReducer
    }
)

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store