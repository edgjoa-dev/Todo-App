import { TodoContext } from "./TodoContext"
import { TodoState } from '../interfaces/interfaces';
import { useReducer } from "react";
import { todoReducer } from "./TodoReducer";

    const INITIAL_STATE: TodoState = {
        todoCount: 2,
        todos: [
            { id: '1', desc: "todo 1", completed: false },
            { id: '2', desc: "todo 2", completed: false },
            { id: '3', desc: "todo 3", completed: false },
            { id: '4', desc: "todo 4", completed: false },
        ],
        completed: 0,
        pending: 2,
    }

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}: props ) => {

    const [ todoState, dispatch ] = useReducer( todoReducer, INITIAL_STATE )

    return (
        <TodoContext.Provider value={{ todoState }} >

            { children }
        </TodoContext.Provider>
    )
}
