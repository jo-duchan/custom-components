import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

// Type
import { States, Size } from "type/button-type";

interface Props {
  states?: States;
  size?: Size;
  fixedWidth?: boolean;
  label?: string;
  onClick: () => void;
}

interface StyledProps {
  states?: States;
  size?: Size;
  fixedWidth?: boolean;
}

function Button({ states, size, fixedWidth, label, onClick }: Props) {
  const Btn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    console.log(states);
    if (!Btn) return;

    if (states === "FOCUSED") {
      Btn.current?.focus();
    }
  }, [states]);

  return (
    <Container
      states={states}
      size={size}
      fixedWidth={fixedWidth}
      disabled={states === "DISABLED"}
      onClick={onClick}
      ref={Btn}
    >
      {label}
    </Container>
  );
}

export default Button;

Button.defaultProps = {
  states: "DEFAULT",
  size: "MEDIUM",
  fixedWidth: false,
  label: "Button",
};

const Container = styled.button<StyledProps>`
  position: relative;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: ${ColorSystem.Primary[600]};
  color: ${ColorSystem.Neutral[0]};
  justify-content: center;
  transition: 300ms ease-in-out;
  transition-property: background;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 114.41441%;
    height: 133.33333%;
    background: ${ColorSystem.Primary[700]};
    border-radius: 20px;
    filter: blur(10px);
    opacity: 0;
    pointer-events: none;
    transition: 200ms ease-in-out;
    transition-property: opacity;
    z-index: -1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 107.2072%;
    height: 116.6666%;
    border: 2px solid rgba(33, 115, 223, 0.7);
    border-radius: 16px;
    box-sizing: border-box;
    opacity: 0;
    pointer-events: none;
    transition: 200ms ease-in-out;
    transition-property: opacity;
    z-index: -1;
  }

  ${(props) =>
    props.size === "XSMALL" &&
    css`
      width: ${props.fixedWidth ? "100%" : "80px"};
      height: 32px;
      ${Text.Medium300};
    `};

  ${(props) =>
    props.size === "SMALL" &&
    css`
      width: ${props.fixedWidth ? "100%" : "88px"};
      height: 40px;
      ${Text.Medium300};
    `};

  ${(props) =>
    props.size === "MEDIUM" &&
    css`
      width: ${props.fixedWidth ? "100%" : "111px"};
      height: 48px;
      ${Text.Medium400};
    `};

  ${(props) =>
    props.size === "LARGE" &&
    css`
      width: ${props.fixedWidth ? "100%" : "133px"};
      height: 60px;
      ${Text.Medium500};
    `};

  ${(props) =>
    props.size === "XLARGE" &&
    css`
      width: ${props.fixedWidth ? "100%" : "135px"};
      height: 68px;
      ${Text.Bold500};
    `};

  &:hover {
    background: ${ColorSystem.Primary[700]};
  }

  &:enabled:active::after {
    opacity: 0.15;
  }

  &:focus::before {
    opacity: 1;
  }

  &:disabled {
    background: ${ColorSystem.Neutral[100]};
    color: ${ColorSystem.Neutral[600]};
  }
`;
