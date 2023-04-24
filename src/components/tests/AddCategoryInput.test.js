import { fireEvent, render, screen } from '@testing-library/react';
import AddCategoryInput from '../AddCategoryInput';

const onAddCategory = jest.fn(() => {});

const setup = props => render(
    <AddCategoryInput onAddCategory={onAddCategory} { ...props } />
);

describe('<AddCategoryInput />', () => {
    beforeEach(() => {
        setup();
    });

    it('should render', () => {
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        expect(form).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(input.getAttribute('value')).toBe('');
    });

    it('should not call setCategories on submit when value is empty', () => {
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onAddCategory).not.toHaveBeenCalled();
    });

    it('should call setCategories on submit when value is not empty', () => {
        const newValue = 'El Gran Sayaman';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: newValue } });

        expect(input.getAttribute('value')).toBe(newValue);

        fireEvent.submit(form);

        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(newValue);
        expect(input.getAttribute('value')).toBe('');
    });
});
