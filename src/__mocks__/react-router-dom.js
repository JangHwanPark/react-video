// react-router-dom 모듈의 실제 구현을 가져옴
const actualReactRouterDom = jest.requireActual('react-router-dom');

// useNavigate 모킹 함수를 한 번만 생성
const mockUseNavigate = jest.fn();

module.exports = {
    // ... 연산자를 사용하여 모듈의 실제 구현을 모킹 객체에 복사
    ...actualReactRouterDom,
    useNavigate: () => mockUseNavigate,
};