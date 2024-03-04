import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

// react-router-dom module mock 사용
jest.mock('react-router-dom');
const { useNavigate } = require('react-router-dom');
const mockNavigate = useNavigate();

describe('<Header/>', () => {
    // 스냅샷 테스트
    it('스냅샷과 일치하는지 확인', () => {
        const { asFragment } = render(<Router><Header /></Router>);
        expect(asFragment()).toMatchSnapshot();
    });

    // 라우팅 테스트
    it('검색 실행 시 입력한 페이지로 라우팅 확인', () => {
        const { getByPlaceholderText, getByRole } = render(<Router><Header /></Router>);
        fireEvent.change(getByPlaceholderText('검색'), { target: { value: 'test' } });
        fireEvent.click(getByRole('button'));

        // navigate 함수가 올바른 경로 인자와 함께 호출되었는지 검증
        expect(mockNavigate).toHaveBeenCalledWith('/videos/test');
    });

    // 상태 관리 테스트
    it('입력 변경 시 검색 입력 상태 업데이트 확인', () => {
        const { getByPlaceholderText } = render(<Router><Header /></Router>);
        const searchInput = getByPlaceholderText('검색');
        fireEvent.change(searchInput, { target: { value: 'new search' } });
        expect(searchInput.value).toBe('new search');
    });

    // 이벤트 핸들링 테스트
    it('폼 제출 시 input 태그 초기화 확인', () => {
        const { getByPlaceholderText, getByRole } = render(<Router><Header /></Router>);
        const searchInput = getByPlaceholderText('검색');
        fireEvent.change(searchInput, { target: { value: 'testing' } });
        fireEvent.submit(getByRole('button'));
        expect(searchInput.value).toBe('');
    });

    // 통합 테스트
    it('전체 검색 워크플로우 실행 확인', () => {
        const { getByPlaceholderText, getByRole } = render(<Router><Header /></Router>);
        fireEvent.change(getByPlaceholderText('검색'), { target: { value: 'integration test' } });
        fireEvent.click(getByRole('button'));

        // `useNavigate` 함수가 올바른 인자와 함께 호출되었는지 검증
        expect(mockNavigate).toHaveBeenCalledWith('/videos/integration test');
    });
});