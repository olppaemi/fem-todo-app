import Header from "components/Header";
import InputTodo from "components/InputTodo";
import TodosPanel from "components/TodosPanel";

import * as S from "./styles";

const Front = () => {
  return (
    <S.Page>
      <S.Center>
        <Header />
        <main>
          <InputTodo />
          <TodosPanel />
        </main>
        <footer>
          <S.Text>Drag and drop to reorder list</S.Text>
        </footer>
      </S.Center>
    </S.Page>
  );
};

export default Front;
