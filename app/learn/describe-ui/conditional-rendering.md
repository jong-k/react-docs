# Conditional Rendering

## 조건부 컴포넌트 렌더링
컴포넌트는 조건부로 각기 다른 JSX를 반환할 수 있으며, null 을 반환할 수도 있다
- `<del/>` tag를 사용하면 취소선을 그을 수 있다

<del>
  <p>예시 텍스트</p>
</del>

&& 연산자 활용 시 주의 사항
- && 의 결과 `false` 이면 `null` 이나 `undefined` 처럼 아무것도 렌더링되지 않는다
- && 왼쪽에 `0` 이면 falsy 값이지만 숫자 0이 렌더링된다 (React 특성 상)
  - 따라서 && 왼쪽에 숫자 대신 boolean 표현식을 쓰는게 좋다
  