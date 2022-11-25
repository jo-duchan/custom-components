import React from "react";
import styled from "styled-components";

// Style
import { LayoutCenter } from "styles/common";
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

// Type
interface Props {
  label?: string;
}

function Checkbox({ label }: Props) {
  return (
    <Container>
      <CheckboxElm type="checkbox" id={label} />
      <Label htmlFor={label}>{label}</Label>
    </Container>
  );
}

export default Checkbox;

Checkbox.defaultProps = {
  label: undefined,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Label = styled.label`
  ${Text.Body300};
  color: ${ColorSystem.Neutral[900]};
  cursor: pointer;
  user-select: none;
`;

const CheckboxElm = styled.input`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid ${ColorSystem.Neutral[500]};
  background: ${ColorSystem.Neutral[0]};
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  transition: 200ms ease-in-out;
  transition-property: background, border-color, color;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.29999 5.09998L4.29999 7.09998L8.79999 1.09998' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: 200ms ease-in-out;
    transition-property: opacity;
  }

  &::before {
    content: "";
    position: absolute;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border: 2px solid rgba(33, 115, 223, 0.7);
    border-radius: 8px;
    opacity: 0;
    transition: 200ms ease-in-out;
    transition-property: opacity;
  }

  &:checked {
    border-color: ${ColorSystem.Secondary[600]};
    background: ${ColorSystem.Secondary[600]};
  }

  &:checked::after {
    opacity: 1;
  }

  &:checked:hover {
    border-color: ${ColorSystem.Secondary[700]};
    background: ${ColorSystem.Secondary[700]};
  }

  &:focus::before {
    opacity: 1;
  }
`;
