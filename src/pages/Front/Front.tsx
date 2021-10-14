import Header from "components/Header";
import InputTodo from "components/InputTodo";
import * as S from "./styles";

const Front = () => {
  return (
    <S.Page>
      <S.Center>
        <Header />
        <InputTodo />
      </S.Center>
    </S.Page>
  );
};

export default Front;
