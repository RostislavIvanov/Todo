import cl from './Todo.module.css';
import { Title } from '~/components/ui/Title/Title.tsx';
import { List } from '~/components/List/List.tsx';

export const Todo = () => {
    return (
        <main className={cl.content}>
            <Title>todos</Title>
            <List/>
        </main>
    );
};
