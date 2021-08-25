import React from "react";
import rem from "services/rem";
import styled from "styled-components";
import check from "assets/icon-check.svg";

const Outer = styled.div`
  position: relative;
  background: ${({ checked, theme }) =>
    checked ? theme.checkHover : theme.check};
  width: ${rem(26)};
  height: ${rem(26)};
  border-radius: 50%;

  &:hover {
    background: ${({ theme }) => theme.checkHover};
  }

  button {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${rem(24)};
    height: ${rem(24)};
    background: ${({ checked, theme }) =>
      checked
        ? `center / 50% no-repeat url(${check}), ${theme.checkHover}`
        : theme.listBg};
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
`;

const CheckCircle = ({ id, checked, handleClick }) => {
  return (
    <Outer checked={checked}>
      <button onClick={() => handleClick(id)} />
    </Outer>
  );
};

export default CheckCircle;
