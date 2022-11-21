import React from "react";
import styled from "styled-components";

// Style
import { LayoutCenter } from "styles/common";
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

// Type
interface Props {
  width?: string;
  label?: string;
  placeholder?: string;
}
interface StyledProps {
  width?: string;
}

function Input({ width, label, placeholder }: Props) {
  return (
    <Container width={width}>
      {label && <Label htmlFor={label}>{label}</Label>}
      <InputElm type="text" placeholder={placeholder} id={label}></InputElm>
    </Container>
  );
}

export default Input;

Input.defaultProps = {
  width: "264px",
  label: undefined,
  placeholder: undefined,
};

const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${(props) => props.width};
`;

const Label = styled.label`
  ${Text.Medium400};
  color: ${ColorSystem.Neutral[900]};
  cursor: pointer;
  user-select: none;
`;

const InputElm = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid ${ColorSystem.Neutral[300]};
  background: ${ColorSystem.Neutral[0]};
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  ${Text.Body400};
  color: ${ColorSystem.Neutral[900]};
  /* transition: 300ms ease-in-out;
  transition-property: background, border-color, color; */

  &::placeholder {
    color: ${ColorSystem.Neutral[500]};
  }

  &:hover {
    border-color: ${ColorSystem.Neutral[400]};
  }

  &:focus {
    padding: 11px 15px;
    border-width: 2px;
    border-color: ${ColorSystem.Secondary[600]};
  }

  &:disabled {
    background: ${ColorSystem.Neutral[100]};
    color: ${ColorSystem.Neutral[500]};
    border-color: ${ColorSystem.Neutral[200]};
  }

  &:disabled::placeholder {
    color: ${ColorSystem.Neutral[400]};
  }

  /* Error 처리 필요 */
`;
