import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useFetchGifs from '../useFetchGifs';

const mockedFetchGifs = [{
    id: 'testId1',
    title: 'testTitle1',
    url: 'https://test.url-1.com'
}];

jest.mock('../../helpers/getGifs', () => {
    const actualGetGifs = jest.requireActual('../../helpers/getGifs');
    return {
        ...actualGetGifs,
        getGifs: () => Promise.resolve({ data: mockedFetchGifs }),
    }
});

describe('useFetchGifs', () => {
    it('should return data after loading completes', async () => {
        let result;
        act(() => {
            const hook = renderHook(() => useFetchGifs('One Punch Man'));
            result = hook.result;
        });

        const { data, loading } = result.current;
        expect(loading).toBe(true);
        expect(data).toStrictEqual([]);

        await waitFor(() => {
            const { data, loading } = result.current;
            expect(loading).toBe(false);
            expect(data).toStrictEqual({ data: mockedFetchGifs });
        });
    });
});
