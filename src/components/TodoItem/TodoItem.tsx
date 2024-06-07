import cl from './TodoItem.module.css';
import { FC } from 'react';
import circle from '~/assets/icons/circle.svg';
import checkmark from '~/assets/icons/checkmark.svg';
import { Todo } from '~/types/todoTypes.ts';
import classNames from 'classnames';

type TodoItemProps = {
    item: Todo;
    changeStatus: (id: string) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ item, changeStatus }) => {
    const { id, text, isActive } = item;

    return (
        <li className={cl.item}>
            <button
                onClick={() => changeStatus(id)}
                className={cl.img}
            >
                {!isActive &&
                    <img className={cl.checkmark} src={checkmark} alt="✓"/>
                }
                <img className={cl.circle} src={circle} alt="○"/>
            </button>
            <p className={classNames(cl.text, {
                [cl.completed]: !isActive,
            })}>
                {text}
            </p>
        </li>
    );
};
