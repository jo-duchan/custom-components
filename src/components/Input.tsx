import React from "react";
import styled, { css } from "styled-components";

// Style
import { LayoutCenter } from "styles/common";
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

// Components
import IconSet from "./IconSet";

// Type
import { InputProps } from "type/input-type";

interface StyledProps {
  width?: string;
  error?: boolean;
}

function Input({ states, width, label, placeholder, errorText }: InputProps) {
  return (
    <Container width={width}>
      {label && <Label htmlFor={label}>{label}</Label>}
      <InputElm
        type="text"
        placeholder={placeholder}
        id={label}
        disabled={states === "DISABLED"}
        error={states === "ERROR"}
        autoComplete="off"
      />
      {states === "ERROR" && (
        <ErrorElement>
          <IconSet type="ERROR" />
          {errorText}
        </ErrorElement>
      )}
    </Container>
  );
}

export default Input;

Input.defaultProps = {
  states: "DEFAULT",
  width: "264px",
  label: undefined,
  placeholder: "Placeholder",
  errorText: "Error text",
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

const InputElm = styled.input<StyledProps>`
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
  transition: 300ms ease-in-out;
  transition-property: background, border-color, color;

  &::placeholder {
    color: ${ColorSystem.Neutral[500]};
  }

  &:hover {
    border-color: ${ColorSystem.Neutral[400]};
  }

  &:focus {
    padding: 13px 17px;
    border-width: 0px;
    outline: 2px solid ${ColorSystem.Secondary[600]};
  }

  &:disabled {
    background: ${ColorSystem.Neutral[100]};
    color: ${ColorSystem.Neutral[500]};
    border-color: ${ColorSystem.Neutral[200]};
  }

  &:disabled::placeholder {
    color: ${ColorSystem.Neutral[400]};
  }

  ${(props) =>
    props.error &&
    css`
      border-color: ${ColorSystem.Error[600]};

      &:focus {
        padding: 13px 17px;
        border-width: 0px;
        outline: 2px solid ${ColorSystem.Error[600]};
      }
    `}
`;

const ErrorElement = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  ${Text.Medium300};
  color: ${ColorSystem.Error[600]};

  & svg {
    margin-bottom: 2.5px;
  }
`;
