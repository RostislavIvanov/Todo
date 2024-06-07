import cl from './ControlPanel.module.css';
import * as React from 'react';
import { FC } from 'react';
import { Button } from '~/components/ui/Button/Button.tsx';
import { RadioButton } from '~/components/ui/RadioButton/RadioButton.tsx';
import { filterOptions } from '~/staticData/staticData.ts';

type ControlPanelProps = {
    amount: number;
    clearCompletedTodos: VoidFunction;
    changeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ControlPanel: FC<ControlPanelProps> = ({ amount, clearCompletedTodos, changeFilter }) => {
    return (
        <div className={cl.panel}>
            <p className={cl.amount}>
                {amount} items left
            </p>
            <RadioButton
                defaultValue='all'
                options={filterOptions}
                onChange={changeFilter}
                name='filter'
            />
            <Button onClick={clearCompletedTodos}>
                Clear completed
            </Button>
        </div>
    );
};
