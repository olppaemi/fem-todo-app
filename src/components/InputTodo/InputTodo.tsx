import * as S from "./styles";

const InputTodo = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Circle />
      </S.Wrapper>
      <S.Input type="text" placeholder="Create a new todo…" />
    </S.Container>
  );
};

export default InputTodo;
