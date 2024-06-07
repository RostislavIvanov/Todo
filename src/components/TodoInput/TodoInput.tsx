import cl from './TodoInput.module.css';
import { ChangeEvent, FC, useState } from 'react';
import downArrow from '~/assets/icons/down-arrow.svg';
import { Input } from '~/components/ui/Input/Input.tsx';

type TodoInputProps = {
    addTodo: (value: string) => void;
}

export const TodoInput: FC<TodoInputProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleConfirmTodo = () => {
        if (inputValue.trim()) {
            addTodo(inputValue);
        }
        setInputValue('');
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleConfirmTodo();
        }
    };

    return (
        <div className={cl.todoInput}>
            <button
                title='Add'
                className={cl.button}
                onClick={handleConfirmTodo}
                type='button'
            >
                <img src={downArrow} alt="Add"/>
            </button>
            <Input
                placeholder='What needs to be done?'
                type="text"
                value={inputValue}
                onChange={(event) => handleInputChange(event)}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
};
