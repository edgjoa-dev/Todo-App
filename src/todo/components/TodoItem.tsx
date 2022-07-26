import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Todo } from '../interfaces/interfaces';

interface props {
    todo: Todo;
}

export const TodoItem = ({ todo }: props) => {

    // const { toggleTodo } = useContext(TodoContext);
    const { toggleTodo } = useContext(TodoContext);


    return (

            <li
            onDoubleClick={()=> toggleTodo(todo.id)}
                style={{
                    textDecoration: todo.completed ? 'line-through' : '',
                    cursor: 'pointer'
                }}
            >
                {todo.desc}
            </li>

    )


}
