import React from "react";
import styled from "styled-components";
import rem from "services/rem";
import sun from "assets/icon-sun.svg";
import moon from "assets/icon-moon.svg";

const Label = styled.label`
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
const Switch = styled.input.attrs({
  type: "checkbox",
})`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleSwitch = ({ checked, setChecked }) => {
  return (
    <Label checked={checked}>
      <Switch
        checked={checked}
        onClick={() => setChecked((checked) => !checked)}
      />
    </Label>
  );
};

export default ToggleSwitch;
