import { render, screen } from '@testing-library/react';
import useFetchGifs from '../../hooks/useFetchGifs';
import GifGrid from '../GifGrid';

jest.mock('../../hooks/useFetchGifs');

jest.mock('../GifGridItem', () => ({
    __esModule: true,
    default: () => <div>GifGridItem</div>,
}));

const testCategory = 'Samurai X';

const setup = () => render(
    <GifGrid category={ testCategory } />
);

describe('<GifGrid />', () => {
    it('should render when loading is true', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        setup();

        const h3 = screen.getByText(testCategory);
        const pLoading = screen.getByText('Loading...');

        expect(h3).toBeInTheDocument();
        expect(pLoading).toBeInTheDocument();

        // it should have animation
        expect(h3.classList).toContain('animate__animated');
        expect(h3.classList).toContain('animate__fadeIn');
        expect(pLoading.classList).toContain('animate__animated');
        expect(pLoading.classList).toContain('animate__flash');
    });

    it('should render when loading is false', () => {
        const gifs = [{
            id: 'testId1',
            title: 'testTitle1',
            url: 'https://localtest.me/anything.gif'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        setup();

        const h3 = screen.getByText(testCategory);
        const pLoading = screen.queryByText('Loading...');
        const GifGridItem = screen.getByText('GifGridItem');

        expect(h3).toBeInTheDocument();
        expect(pLoading).not.toBeInTheDocument();
        expect(GifGridItem).toBeInTheDocument();

        // it should have animation
        expect(h3.classList).toContain('animate__animated');
        expect(h3.classList).toContain('animate__fadeIn');
    });
});