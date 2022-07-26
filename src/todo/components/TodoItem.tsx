import { Todo } from '../interfaces/interfaces';

interface props {
    todo: Todo;
}

export const TodoItem = ({ todo }: props) => {


    const handleDbClick = () => {
        console.log('db click:', todo.desc);
    }

    return (

            <li
            onDoubleClick={handleDbClick}
                style={{
                    textDecoration: todo.completed ? 'line-through' : '',
                }}
            >
                {todo.desc}
            </li>

    )


}
