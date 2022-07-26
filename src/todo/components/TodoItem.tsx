import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Todo } from '../interfaces/interfaces';

interface props {
    todo: Todo;
}

export const TodoItem = ({ todo }: props) => {

    const { toggleTodo } = useContext(TodoContext);

    const handleDbClick = () => {
        toggleTodo(todo.id);
    }

    return (

            <li
            onDoubleClick={handleDbClick}
                style={{
                    textDecoration: todo.completed ? 'line-through' : '',
                    cursor: 'pointer'
                }}
            >
                {todo.desc}
            </li>

    )


}
