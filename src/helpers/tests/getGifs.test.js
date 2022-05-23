import { getGifs } from "../getGifs";

const mockedResponse = [{
    id: 'testId1',
    title: 'testTitle1',
    images: {
        downsized_medium: {
            url: 'https://test.url-1.com'
        }
    }
}];

global.fetch = () => Promise.resolve({
    json: () => Promise.resolve({ data: mockedResponse }),
});

describe('getGifs', () => {
    it('should call global.fetch', async () => {
        const category = 'One Punch Man';
        const expectedGifs = [
            {
                id: 'testId1',
                title: 'testTitle1',
                url: 'https://test.url-1.com'
            }
        ];

        const gifs = await getGifs(category);
        expect(gifs).toStrictEqual(expectedGifs);
    });
});
