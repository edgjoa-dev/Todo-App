import { Todo, TodoState } from "../interfaces/interfaces";


type TodoAction =
    | { type: 'addTodo', payload: Todo }
    | { type: 'removeTodo', payload: { id: String } }



export const TodoReducer = (state: TodoState, action: TodoAction): TodoState => {

    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }

        default:
            return state;
    }
}