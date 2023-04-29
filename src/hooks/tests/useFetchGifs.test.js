import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import useFetchGifs from 'hooks/useFetchGifs';

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

        const { data, isLoading } = result.current;
        expect(isLoading).toBe(true);
        expect(data).toStrictEqual([]);

        await waitFor(() => {
            const { data, isLoading } = result.current;
            expect(isLoading).toBe(false);
            expect(data).toStrictEqual({ data: mockedFetchGifs });
        });
    });
});
