import MoonIcon from "icons/MoonIcon";
import SunIcon from "icons/SunIcon";
import { MouseEventHandler } from "react";
import * as S from "./styles";

const Header = ({
  mode,
  onClick,
}: {
  mode: "light" | "dark";
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <S.Header>
      <S.Title>TODO</S.Title>
      <S.ToggleButton onClick={onClick}>
        {mode === "light" ? <SunIcon /> : <MoonIcon />}
      </S.ToggleButton>
    </S.Header>
  );
};

export default Header;
