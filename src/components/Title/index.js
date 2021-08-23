import ToggleSwitch from "components/ToggleSwitch/index";
import React from "react";
import rem from "services/rem";

import styled from "styled-components";
const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: clamp(${rem(46)}, 5vw, ${rem(72)});
  margin-bottom: ${rem(32)};

  h1 {
    font-size: calc(${rem(38)} + 1vw);
    color: ${({ theme }) => theme.textHeader};
    letter-spacing: ${rem(16)};
    margin: 0;
  }
`;

const Title = ({ checked, setChecked }) => {
  return (
    <HeaderSection>
      <h1>TODO</h1>
      <ToggleSwitch checked={checked} setChecked={setChecked} />
    </HeaderSection>
  );
};

export default Title;
