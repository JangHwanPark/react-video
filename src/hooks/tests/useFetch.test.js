import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import useFetch from '../useFetch';

// fetch 호출을 모킹하기 위해 jest-fetch-mock을 활성화합니다.
fetchMock.enableMocks();

describe('useFetch 사용하기', () => {
    // 각 테스트가 실행되기 전에 fetch 모킹을 초기화합니다.
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('데이터를 성공적으로 가져와야 함', async () => {
        // 모킹할 데이터와 URL을 정의합니다.
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const mockData = { key: '값' };

        // fetch 호출 시에 mockData를 반환하도록 설정합니다.
        fetch.mockResponseOnce(JSON.stringify(mockData));

        // useFetch 훅을 렌더링하고, 비동기 업데이트가 있을 때까지 기다립니다.
        const { result } = renderHook(() => useFetch(url));

        // 비동기 작업이 완료될 때까지 기다립니다.
        await waitFor(() => expect(result.current.loading).toBeFalsy());

        // useFetch 훅이 반환하는 상태를 검증합니다.
        expect(result.current.value).toEqual(mockData); // 성공적으로 데이터를 가져왔는지 확인
        expect(result.current.error).toBeUndefined(); // 에러가 없어야 함
    });

    it('데이터를 가져오는데 실패했을 때 에러를 처리해야 함', async () => {
        // fetch 호출이 실패하도록 설정합니다.
        fetch.mockReject(new Error('데이터를 가져오는데 실패함'));

        // useFetch 훅을 렌더링하고, 비동기 업데이트가 있을 때까지 기다립니다.
        const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/posts'));

        // 비동기 작업이 완료될 때까지 기다립니다.
        await waitFor(() => expect(result.current.loading).toBeFalsy());

        // useFetch 훅이 반환하는 상태를 검증합니다.
        expect(result.current.error).toBeDefined(); // 에러가 정의되어 있어야 함
        expect(result.current.value).toBeUndefined(); // value는 정의되지 않아야 함
    });
});