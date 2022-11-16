import React, { useState } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Heading, Text } from "styles/typography";

// Components
import Button from "components/Button";

// Type
import { States } from "type/button-type";

function Test() {
  const [btnStates, setBtnStates] = useState<States>("DEFAULT");
  const handleClick = () => {
    alert("You clicked the button!");
  };
  return (
    <Container>
      <h3>Test</h3>

      <Button states={btnStates} size="LARGE" onClick={handleClick} />
    </Container>
  );
}

export default Test;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;

  & h3 {
    ${Heading.DefaultH1};
  }
`;
