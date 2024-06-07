import { Todo } from '~/types/todoTypes.ts';
import { FilterOptions } from '~/types/filterTypes.ts';

export const todoData: Todo[] = [
    {
        id: '1',
        text: 'Todo 1',
        isActive: true,
    },
    {
        id: '2',
        text: 'Todo 2',
        isActive: true,
    },
    {
        id: '3',
        text: 'Todo 3',
        isActive: true,
    },
    {
        id: '4',
        text: 'Todo 4',
        isActive: true,
    },
    {
        id: '5',
        text: 'Todo 5',
        isActive: true,
    },
]

export const filterOptions: FilterOptions[] = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'Active',
        value: 'active',
    },
    {
        label: 'Completed',
        value: 'completed',
    }
]
