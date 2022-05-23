import { render, screen } from '@testing-library/react';
import GifExpertApp from '../GifExpertApp';

jest.mock('../components/AddCategory', () => ({
    __esModule: true,
    default: () => <div>AddCategory</div>,
}));

jest.mock('../components/GifGrid', () => ({
    __esModule: true,
    default: () => <div>GifGrid</div>,
}));

const setup = props => render(
    <GifExpertApp {...props} />
);

describe('<GifExpertApp />', () => {
    it('should render GifGrid when initialCategories is not empty', () => {
        const initialCategories = ['One Punch Man', 'Dragon Ball'];
        setup({ initialCategories });

        const h2 = screen.getByText('GifExpertApp');
        const AddCategory = screen.getByText('AddCategory');
        const allGifGrid = screen.getAllByText('GifGrid');

        expect(h2).toBeInTheDocument();
        expect(AddCategory).toBeInTheDocument();
        expect(allGifGrid.length).toBe(initialCategories.length);
    });

    it('should not render GifGrid when initialCategories is empty', () => {
        setup({ initialCategories: [] });

        const h2 = screen.getByText('GifExpertApp');
        const AddCategory = screen.getByText('AddCategory');
        const GifGrid = screen.queryByText('GifGrid');

        expect(h2).toBeInTheDocument();
        expect(AddCategory).toBeInTheDocument();
        expect(GifGrid).not.toBeInTheDocument();
    });
});