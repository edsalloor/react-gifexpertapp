import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../AddCategory';

const setCategories = jest.fn(() => {});

const setup = props => render(
    <AddCategory setCategories={setCategories} { ...props } />
);

describe('<AddCategory />', () => {
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

        expect(setCategories).not.toHaveBeenCalled();
    });

    it('should call setCategories on submit when value is not empty', () => {
        const newValue = 'El Gran Sayaman';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.change(input, { target: { value: newValue } });

        expect(input.getAttribute('value')).toBe(newValue);

        fireEvent.submit(form);

        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.getAttribute('value')).toBe('');
    });
});
