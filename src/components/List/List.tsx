import cl from './List.module.css';
import { TodoInput } from '~/components/TodoInput/TodoInput.tsx';
import { TodoTasks } from '~/components/TodoTasks/TodoTasks.tsx';
import { useState } from 'react';
import { todoData } from '~/staticData/staticData.ts';
import { Todo } from '~/types/todoTypes.ts';
import { ControlPanel } from '~/components/ControlPanel/ControlPanel.tsx';
import { FilterValue } from '~/types/filterTypes.ts';

export const List = () => {
    const [todos, setTodos] = useState(todoData);
    const [filterValue, setFilterValue] = useState<FilterValue>('all');

    const filterTodos = () => {
        switch (filterValue) {
            case 'active':
                return todos.filter(todo => todo.isActive);
            case 'completed':
                return todos.filter(todo => !todo.isActive);
            default:
                return todos;
        }
    };

    const handleCountActiveTodos = filterTodos().filter(todo => todo.isActive).length;

    const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value as FilterValue);
    };

    const handleAddTodo = (todo: string) => {
        const newTodo: Todo = {
            id: String(Math.random()),
            text: todo,
            isActive: true,
        };
        setTodos([newTodo, ...todos]);
    };

    const handleChangeStatus = (id: string) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isActive: !todo.isActive } : todo,
        ));
    };

    const handleClearCompletedTodos = () => {
        const activeTodos = todos.filter(todo => todo.isActive);
        setTodos(activeTodos);
    };

    return (
        <div className={cl.list}>
            <TodoInput addTodo={handleAddTodo}/>
            <TodoTasks
                todos={filterTodos()}
                changeStatus={handleChangeStatus}
            />
            <ControlPanel
                amount={handleCountActiveTodos}
                clearCompletedTodos={handleClearCompletedTodos}
                changeFilter={handleChangeFilter}
            />
        </div>
    );
};
