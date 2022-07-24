import { TodoContext } from "./TodoContext"
import { TodoState } from '../interfaces/interfaces';

    const INITIAL_STATE: TodoState = {
        todoCount: 2,
        todos: [
            { id: 1, text: "todo 1", completed: false },
            { id: 2, text: "todo 2", completed: false },
            { id: 3, text: "todo 3", completed: false },
            { id: 4, text: "todo 4", completed: false },
        ],
        completed: 0,
        pending: 2,
    }

interface TodoProps {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}: TodoProps ) => {
    return (
        <TodoContext.Provider value={{}} >
            { children }
        </TodoContext.Provider>
    )
}
