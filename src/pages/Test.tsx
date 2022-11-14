import React from "react";
import styled from "styled-components";

// Style
import { Heading } from "styles/typography";

// Components
import Button from "components/Button";

function Test() {
  return (
    <Container>
      <h3>Test</h3>
      <Button states="FOCUSED" size="LARGE" />
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
