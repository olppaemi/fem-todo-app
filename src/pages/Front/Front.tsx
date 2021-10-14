import Header from "components/Header";
import InputTodo from "components/InputTodo";
import TodosPanel from "components/TodosPanel";

import * as S from "./styles";

const Front = () => {
  return (
    <S.Page>
      <S.Center>
        <Header />
        <InputTodo />
        <TodosPanel />
      </S.Center>
    </S.Page>
  );
};

export default Front;
