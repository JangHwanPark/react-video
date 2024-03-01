import { renderHook, waitFor } from "@testing-library/react";
import useAsync from "../../Hooks/useAsync";

/**
 * `useAsync` 커스텀 훅 테스트 스위트
 * `useAsync`는 비동기 작업을 처리하고, 해당 작업의 로딩 상태, 결과, 오류 상태를 관리합니다.
 */
describe('useAsync Custom Hook Test', () => {
    /**
     * 비동기 작업이 성공적으로 완료되는 시나리오 테스트
     * 이 테스트는 `useAsync` 훅이 비동기 작업을 성공적으로 처리하고,
     * 올바른 결과값을 반환하는지 확인합니다.
     */
    it('비동기 작업을 성공적으로 완료해야한다.', async () => {
        // 모의 비동기 함수를 정의합니다. 이 함수는 성공적으로 '테스트 데이터'를 반환합니다.
        const mockData = '테스트 데이터';
        const fetchData = jest.fn().mockResolvedValue(mockData);

        // `useAsync` 훅을 렌더링하고, `fetchData` 함수를 인자로 전달합니다.
        const { result } = renderHook(() => useAsync(fetchData, []));

        // 훅이 비동기 작업을 완료할 때까지 대기합니다.
        await waitFor(() => expect(result.current.loading).toBeFalsy());

        // 비동기 작업이 성공적으로 완료되었는지 결과를 검증합니다.
        expect(result.current.error).toBeUndefined();
        expect(result.current.value).toEqual(mockData);
    });

    /**
     * 비동기 작업이 실패하는 시나리오 테스트
     * 이 테스트는 `useAsync` 훅이 비동기 작업 중 발생한 오류를 올바르게 처리하고,
     * 해당 오류 정보를 반환하는지 확인합니다.
     */
    it('비동기 작업이 실패해야 한다.', async () => {
        // 모의 비동기 함수를 정의합니다. 이 함수는 오류를 던집니다.
        const mockError = new Error('테스트 에러');
        const fetchData = jest.fn().mockRejectedValue(mockError);

        // `useAsync` 훅을 렌더링하고, `fetchData` 함수를 인자로 전달합니다.
        const { result } = renderHook(() => useAsync(fetchData, []));

        // 훅이 비동기 작업을 완료할 때까지 대기합니다.
        await waitFor(() => expect(result.current.loading).toBeFalsy());

        // 비동기 작업이 실패했는지 결과를 검증합니다.
        expect(result.current.error).toEqual(mockError);
        expect(result.current.value).toBeUndefined();
    });
});