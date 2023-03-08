import React, { useState } from "react";
import styled, { css } from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Heading, Text } from "styles/typography";

// Type
interface Props {
  label: string;
  helpText: string;
}

function CopyText({ label, helpText }: Props) {
  const [copyValue, setCopyValue] = useState("");

  const copyHandler = () => {
    window.navigator.clipboard.writeText(copyValue).then(() => {
      alert(`${copyValue} 복사완료`);
      setCopyValue("");
    });
  };

  return (
    <Container>
      <Label>
        {label}
        <InputWrapper>
          <InputInner
            onChange={(e) => setCopyValue(e.target.value)}
            value={copyValue}
            type="text"
          />
          <Button onClick={copyHandler} type="button" />
        </InputWrapper>
      </Label>
      {helpText && <HelpText>{helpText}</HelpText>}
    </Container>
  );
}

export default CopyText;

CopyText.defaultProps = {
  label: undefined,
  helpText: undefined,
};

const Layout = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Container = styled.div`
  ${Layout};
  width: fit-content;
`;

const Label = styled.label`
  ${Layout};
  ${Text.Medium400};
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 264px;
  height: 48px;
  background: ${ColorSystem.Neutral[0]};
  border: 1px solid;
  border-color: ${ColorSystem.Neutral[300]};
  border-radius: 12px;
  padding-left: 16px;
  padding-right: 8px;
  box-sizing: border-box;
`;

const InputInner = styled.input`
  height: 32px;
  ${Text.Body400};
  color: ${ColorSystem.Neutral[900]};
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  background: beige;
`;

const HelpText = styled.span`
  ${Text.Body300};
  color: ${ColorSystem.Neutral[600]};
`;
