import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { List } from '~/components/List/List.tsx';
import { todoData } from '~/staticData/staticData.ts';

describe('List Component', () => {
    test('renders List component', () => {
        render(<List/>);
        expect(screen.getByPlaceholderText(/What needs to be done?/i)).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<List/>);
        const input = screen.getByPlaceholderText(/What needs to be done?/i);
        const addButton = screen.getByTitle('Add');

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Task')).toBeInTheDocument();
    });


    test('changes todo status', () => {
        render(<List/>);
        const todoItem = screen.getByText(todoData[0].text);
        const checkmarkButtons = screen.getAllByAltText('○');
        checkmarkButtons.forEach((checkmark, index) => {
            if (index === 0) {
                fireEvent.click(checkmark);
            }
        });
        expect(todoItem).toHaveClass('completed');
    });

    test('filters completed todos', () => {
        render(<List/>);
        const checkmarkButtons = screen.getAllByAltText('○');
        checkmarkButtons.forEach((checkmark, index) => {
            if (index === 0 || index === 1) {
                fireEvent.click(checkmark);
            }
        });
        const filterButton = screen.getByLabelText(/completed/i);
        fireEvent.click(filterButton);
        const todos = screen.getAllByRole('listitem');

        todos.forEach(todo => {
            const paragraph = todo.querySelector('p');
            expect(paragraph).toHaveClass('completed');
        });
    });

    test('filters active todos', () => {
        render(<List/>);
        const filterButton = screen.getByLabelText(/active/i);
        fireEvent.click(filterButton);
        const todos = screen.getAllByRole('listitem');
        expect(todos.length).toBe(5);
    });

    test('clears completed todos', () => {
        render(<List/>);
        const clearButton = screen.getByText(/clear completed/i);
        const checkmarkButtons = screen.getAllByAltText('○');
        checkmarkButtons.forEach((checkmark) => {
            fireEvent.click(checkmark);
        });
        fireEvent.click(clearButton);
        const completedTodos = screen.queryAllByRole('listitem');
        expect(completedTodos.length).toBe(0);
    });

    test('same amount of todos', () => {
        render(<List/>);
        const filterButton = screen.getByLabelText(/completed/i);
        fireEvent.click(filterButton);
        const todos = screen.queryAllByRole('listitem');
        const amountParagraph = screen.getByText(/items left/i);
        expect(amountParagraph).toBeInTheDocument();
        expect(amountParagraph).toHaveTextContent('0 items left');
        expect(todos.length).toBe(0);
    });
});
// Так вышло, что ни на одном проекте тестов я не писал, только скриншотные были в одном месте, поэтому тут явно не самый качественный код:)
