import cl from './Title.module.css';
import { FC } from 'react';
import classNames from 'classnames';

type TitleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export const Title: FC<TitleProps> = ({ children, className = '', ...rest }) => {
    return (
        <h1
            className={classNames(cl.title, {
                [className]: !!className,
            })}
            {...rest}
        >
            {children}
        </h1>
    );
};
