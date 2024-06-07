import { ReactNode } from 'react';

export type FilterValue = 'all' | 'active' | 'completed';

export type FilterOptions = {
    label: string | ReactNode;
    value: FilterValue;
}
