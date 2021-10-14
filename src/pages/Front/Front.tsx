import Header from "components/Header";
import { MouseEventHandler } from "react";
import * as S from "./styles";

const Front = ({
  mode,
  toggleMode,
}: {
  mode: "light" | "dark";
  toggleMode: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <S.Page>
      <S.Center>
        <Header mode={mode} onClick={toggleMode} />
      </S.Center>
    </S.Page>
  );
};

export default Front;
