import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import List from '../components/List/List.jsx';

describe('List component', () => {
    it('renders the component', () => {
        render(<List />);
        expect(screen.getByPlaceholderText('Add Item')).toBeInTheDocument();
        expect(screen.getByText('Add')).toBeInTheDocument();
    });

    it('adds an item to the list', async () => {
        render(<List />);

        fireEvent.change(screen.getByPlaceholderText('Add Item'), { target: { value: 'New Item' } });

        fireEvent.click(screen.getByText('Add'));

        await waitFor(() => {
            expect(screen.getByText('New Item')).toBeInTheDocument();
        });
    });

    it('removes an item from the list', async () => {
        render(<List />);

        const removeButton = screen.getByText('Remove', { selector: 'li:first-of-type button' });

        fireEvent.click(removeButton);

        await waitFor(() => {
            expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
        });
    });
});