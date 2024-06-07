import cl from './TodoTasks.module.css';
import { TodoItem } from '~/components/TodoItem/TodoItem.tsx';
import { FC } from 'react';
import { Todo } from '~/types/todoTypes.ts';

type TodoTasksProps = {
    todos: Todo[];
    changeStatus: (id: string) => void;
}

export const TodoTasks: FC<TodoTasksProps> = ({ todos, changeStatus }) => {
    return (
        <ul className={cl.tasks}>
            {todos.map((item) =>
                <TodoItem key={item.id} item={item} changeStatus={changeStatus}/>,
            )}
        </ul>
    );
};
