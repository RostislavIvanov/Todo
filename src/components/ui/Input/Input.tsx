import { FC } from 'react';
import cl from './Input.module.css';
import classNames from 'classnames';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: FC<InputProps> = ({ className = '', ...rest }) => {
    return (
        <input
            className={classNames(cl.input, {
                [className]: !!className,
            })}
            {...rest}
        />
    );
};
