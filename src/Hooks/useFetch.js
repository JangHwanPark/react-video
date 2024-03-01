import useAsync from './useAsync';

const DEFAULT_OPTIONS = {
    headers: { "Content-Type": "application/json" },
}

/**
 * 주어진 URL로부터 데이터를 비동기적으로 가져오는 커스텀 훅.
 *
 * `useFetch`는 `fetch` API를 활용하여 네트워크 요청을 수행하며,
 * `useAsync` 훅을 이용하여 요청의 로딩 상태, 결과값, 그리고 에러를 관리합니다.
 * 요청이 성공적으로 완료되면 응답을 JSON 형태로 변환하여 반환하고,
 * 요청이 실패하면 오류를 반환합니다.<br>
 *
 * @param {string} url - 데이터를 가져올 URL 문자열입니다.
 * @param {Object} [options={}] - `fetch` 요청에 사용될 옵션 객체입니다.
 * 기본적으로 "Content-Type": "application/json" 헤더를 포함하고 있으며,
 * 여기에 추가적인 옵션을 지정할 수 있습니다.
 * @param {Array} [dependencies=[]] - 요청을 다시 실행할 조건이 되는 의존성 배열입니다.
 * 이 배열에 포함된 값이 변경되면 요청이 재실행됩니다.
 *
 * @returns {Object} 비동기 요청의 결과를 나타내는 객체로, 다음 세 가지 속성을 포함합니다:
 * - {boolean} loading - 요청이 진행 중인지 여부를 나타내는 불리언 값입니다.
 * - {Error} error - 요청 실패 시 발생한 에러 객체입니다.
 * - {any} value - 요청이 성공적으로 완료되었을 때의 결과 데이터입니다.
 *
 * @example
 * function MyComponent() {
 *   const { loading, error, value } = UseFetch('https://api.example.com/data');
 *
 *   if (loading) return <div>로딩 중...</div>;
 *   if (error) return <div>에러 발생: {error.message}</div>;
 *   return <div>{JSON.stringify(value)}</div>;
 * }<br>
 */
export default function useFetch(url, options = {}, dependencies = []) {
    return useAsync(() => {
        return fetch(url, { ...DEFAULT_OPTIONS, ...options })
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('네트워크 응답이 정상적이지 않습니다.');
            })
            .catch(error => Promise.reject(error));
    }, dependencies)
}