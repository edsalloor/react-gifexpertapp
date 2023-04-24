import { render, screen } from '@testing-library/react';
import GifExpertApp from '../GifExpertApp';

jest.mock('../components/AddCategoryInput', () => ({
    __esModule: true,
    default: () => <div>AddCategoryInput</div>,
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

        const heading = screen.getByText('Gif Expert App');
        const AddCategoryInput = screen.getByText('AddCategoryInput');
        const allGifGrid = screen.getAllByText('GifGrid');

        expect(heading).toBeInTheDocument();
        expect(AddCategoryInput).toBeInTheDocument();
        expect(allGifGrid.length).toBe(initialCategories.length);
    });

    it('should not render GifGrid when initialCategories is empty', () => {
        setup({ initialCategories: [] });

        const heading = screen.getByText('Gif Expert App');
        const AddCategoryInput = screen.getByText('AddCategoryInput');
        const GifGrid = screen.queryByText('GifGrid');

        expect(heading).toBeInTheDocument();
        expect(AddCategoryInput).toBeInTheDocument();
        expect(GifGrid).not.toBeInTheDocument();
    });
});