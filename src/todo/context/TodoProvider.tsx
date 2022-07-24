import { TodoContext } from "./TodoContext"

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
