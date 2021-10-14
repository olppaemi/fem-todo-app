import { todoActions } from "context/actions";
import { useTodoContext } from "context/TodoContext";
import { FormEvent, useState } from "react";
import * as S from "./styles";

const InputTodo = () => {
  const { dispatch } = useTodoContext();
  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(todoActions.add(text));
    setText("");
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.Circle />
      </S.Wrapper>
      <S.Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new todo…"
      />
    </S.Form>
  );
};

export default InputTodo;
