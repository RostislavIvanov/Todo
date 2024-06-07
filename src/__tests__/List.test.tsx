import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { List } from '~/components/List/List.tsx';
import { todoData } from '~/staticData/staticData.ts';

// Так вышло, что ни на одном проекте тестов я не писал, только скриншотные были в одном месте, поэтому тут явно не самый качественный код:)
describe('List Component', () => {
    test('renders List component', () => {
        render(<List />);
        expect(screen.getByPlaceholderText(/What needs to be done?/i)).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<List />);
        const input = screen.getByPlaceholderText(/What needs to be done?/i);
        const addButton = screen.getByTitle('Add');

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Task')).toBeInTheDocument();
    });


    test('changes todo status', () => {
        render(<List />);
        const todoItem = screen.getByText(todoData[0].text);
        const checkmarkButtons = screen.getAllByAltText('○');
        checkmarkButtons.forEach((checkmark, index) => {
            if (index === 0) {
                fireEvent.click(checkmark);
            }
        })
        expect(todoItem).toHaveClass('completed');
    });

});
