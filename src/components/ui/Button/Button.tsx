import cl from './Button.module.css';
import { FC } from 'react';
import classNames from 'classnames';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ children, className = '', ...rest }) => {
    return (
        <button
            {...rest}
            className={classNames(cl.btn, {
                [className]: !!className,
            })}
        >
            {children}
        </button>
    );
};
