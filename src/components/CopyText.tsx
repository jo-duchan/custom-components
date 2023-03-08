import React, { useState } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Heading, Text } from "styles/typography";

function CopyText() {
  const [copyValue, setCopyValue] = useState("");

  const copyHandler = () => {
    window.navigator.clipboard.writeText(copyValue).then(() => {
      alert(`${copyValue} 복사완료`);
    });
  };

  return (
    <Container>
      <InputBox
        onChange={(e) => setCopyValue(e.target.value)}
        value={copyValue}
        type="text"
      />
      <Button onClick={copyHandler} type="button" />
    </Container>
  );
}

export default CopyText;

const Container = styled.div`
  width: 264px;
  height: 48px;
  background: ${ColorSystem.Neutral[0]};
  border: 1px solid;
  border-color: ${ColorSystem.Neutral[300]};
  border-radius: 12px;
`;

const InputBox = styled.input``;

const Button = styled.button`
  width: 20px;
  height: 20px;
  background: beige;
`;
