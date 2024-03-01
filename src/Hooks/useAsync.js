import React, {useCallback, useEffect, useState} from 'react';

/**
 * 의존성 추적을 포함하여 비동기 함수를 실행하기 위한 커스텀 훅
 *
 * `useAsync`는 비동기 작업의 로딩 상태를 추적하고, 에러를 캡처하며, 비동기 작업의 결과를 저장하는 과정을 추상화 합니다.<br>
 * `useCallback`훅을 사용하여 제공된 비동기 콜백 함수를 의존성 배열에 기반하여 메모이제이션 하며,
 * 의존성이 변경될 때만 함수를 재실행 하도록 보장합니다.<br>
 *
 * @param {Function} callback - 프로미스를 반환하는 비동기 함수입니다. 이 함수는 훅 내부에서 실행되며,
 * 비동기 작업을 수행해야 합니다. 함수는 컴포넌트 외부에서 정의되거나 메모이제이션되어야 하며,
 * 불필요한 재실행을 방지하기 위함입니다.
 * @param {Array} [dependencies=[]] - `useCallback` 훅을 위한 의존성 배열입니다.
 * 이 배열은 콜백이 의존하고 있으며 시간에 따라 변경될 수 있는 모든 변수와 프롭스를 포함해야 합니다.
 * 의존성이 변경될 때마다 콜백은 재메모이제이션되고 다시 실행됩니다.
 *
 * @returns {Object}다음 프로퍼티를 포함하는 객체를 반환합니다.
 * - {boolean} loading - 비동기 작업이 현재 진행 중인지 여부를 나타내는 bool 플래그입니다.
 * 초기값은 `true`이며, 작업이 완료되거나 실패하면 `false`로 설정됩니다.
 * - {Error} error - 비동기 작업이 실패했을 때의 에러 객체입니다. 초기값은 `undefined`이며,
 * 작업이 에러를 던지면 해당 에러로 설정됩니다.
 * - {any} value - 비동기 작업의 결과값입니다. 초기값은 `undefined`이며, 콜백의 프로미스가
 * 해결된 값으로 설정됩니다.
 *
 * @example
 * function fetchData() {
 *   return fetch('https://api.example.com/data')
 *     .then(res => res.json());
 * }
 *
 * function MyComponent() {
 *   const { loading, error, value } = UseAsync(fetchData, []);
 *
 *   if (loading) return <div>로딩 중...</div>;
 *   if (error) return <div>에러: {error.message}</div>;
 *   return <div>{JSON.stringify(value)}</div>;
 * }<br>
 */
export default function useAsync(callback, dependencies = []) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const callbackMemoized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized]);

    return { loading, error, value }
}