import cl from './RadioButton.module.css';
import * as React from 'react';
import { FC, ReactNode } from 'react';

type Option = {
    label: string | ReactNode;
    value: string;
}

type RadioButtonProps = {
    options: Option[];
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const RadioButton: FC<RadioButtonProps> = ({ options, defaultValue, onChange, name }) => {
    return (
        <div className={cl.radio}>
            {options.map((option, index) => (
                <label className={cl.label} key={index}>
                    <input
                        type="radio"
                        className={cl.input}
                        name={name}
                        value={option.value}
                        defaultChecked={defaultValue === option.value}
                        onChange={onChange}
                    />
                    <span>
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    );
};
