# 객체 State 업데이트하기

## State를 읽기 전용인 것처럼 다루기
- state에 객체 리터럴을 저장한 경우, 읽기 전용인 것처럼 다뤄야 한다
- 객체를 기술적으로 바꿀 수 있지만 (예-`position.x = 1`) 이럴 경우 React가 객체가 바뀌었는지 알 수 없다
  - 이는 이전 렌더링을 변경하는 것에 불과하다
- 리렌더링을 발생시키려면, 새 객체를 만들어서 set state 함수에 전달해야 한다

## 스프레드 연산자로 객체 복사하기
- 얕은 복사이므로 한 레벨 깊이의 내용만 복사함에 주의 (중첩된 프로퍼티 업데이트 시 여러번 사용해야 함)

## Immer 라이브러리로 불변성 지키기
- state 객체가 여러 레벨로 중첩되어 있다면, `use-immer` 라이브러리를 설치하여 편리하게 업데이트할 수 있다
  - `yarn add immer use-immer`
- `Immer` 라이브러리는 불변성을 지키면서 편리한 업데이트를 지원한다
  - 내부적으로 프록시 패턴을 사용하여 `draft` 객체를 통해 매번 새로운 객체를 생성해준다
- 예시)
```jsx
updatePerson(draft => {
  draft.artwork.city = 'Lagos';
});
```
