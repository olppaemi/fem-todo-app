import { useModeContext } from "contexts/ModeContext";
import MoonIcon from "icons/MoonIcon";
import SunIcon from "icons/SunIcon";
import * as S from "./styles";

const Header = () => {
  const { mode, toggleMode } = useModeContext();

  return (
    <S.Header>
      <S.Title>TODO</S.Title>
      <S.ToggleButton onClick={toggleMode}>
        {mode === "dark" ? <SunIcon /> : <MoonIcon />}
      </S.ToggleButton>
    </S.Header>
  );
};

export default Header;
