import React from "react";
import styled from "styled-components";
import rem from "services/rem";
import sun from "assets/icon-sun.svg";
import moon from "assets/icon-moon.svg";

const Toggle = styled.span`
  position: relative;

  &:before {
    display: block;
    content: "";
    position: absolute;
    top: 25%;
    right: 0;
    width: ${rem(28)};
    height: ${rem(28)};
    background: ${({ checked }) => (checked ? `url(${moon})` : `url(${sun})`)}
      no-repeat;
  }
`;

const ToggleSwitch = ({ checked, setChecked }) => {
  return <Toggle checked={checked} onClick={() => setChecked(!checked)} />;
};

export default ToggleSwitch;
