import React, { useEffect } from "react";
import styled, { css } from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

// Type
import { States, Size } from "type/button-type";

interface Props {
  states?: States;
  setStates: React.Dispatch<React.SetStateAction<States>>;
  size?: Size;
  label?: string;
}

interface StyledProps {
  states?: States;
  size?: Size;
}

function Button({ states, setStates, size, label }: Props) {
  useEffect(() => {
    console.log(states);
  }, [states]);
  return (
    <Container
      states={states}
      size={size}
      onMouseEnter={() => {
        console.log("MouseEnter");
        setStates("HOVERED");
      }}
      onMouseLeave={() => {
        console.log("MouseLeave");
        setStates("DEFAULT");
      }}
      onMouseDown={() => {
        console.log("MouseDown");
        setStates("PRESSED");
      }}
      onMouseUp={() => {
        console.log("MouseUp");
        setStates("HOVERED");
      }}
    >
      {label}
    </Container>
  );
}

export default Button;

Button.defaultProps = {
  states: "DEFAULT",
  size: "MEDIUM",
  label: "Button",
};

const Container = styled.button<StyledProps>`
  position: relative;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
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
      width: 80px;
      height: 32px;
      ${Text.Medium300};
    `};

  ${(props) =>
    props.size === "SMALL" &&
    css`
      width: 88px;
      height: 40px;
      ${Text.Medium300};
    `};

  ${(props) =>
    props.size === "MEDIUM" &&
    css`
      width: 111px;
      height: 48px;
      ${Text.Medium400};
    `};

  ${(props) =>
    props.size === "LARGE" &&
    css`
      width: 133px;
      height: 60px;
      ${Text.Medium500};
    `};

  ${(props) =>
    props.size === "XLARGE" &&
    css`
      width: 135px;
      height: 68px;
      ${Text.Bold500};
    `};

  ${(props) =>
    props.states === "DEFAULT" &&
    css`
      background: ${ColorSystem.Primary[600]};
      color: ${ColorSystem.Neutral[0]};
    `};

  ${(props) =>
    props.states === "HOVERED" &&
    css`
      background: ${ColorSystem.Primary[700]};
      color: ${ColorSystem.Neutral[0]};
    `};

  ${(props) =>
    props.states === "PRESSED" &&
    css`
      background: ${ColorSystem.Primary[700]};
      color: ${ColorSystem.Neutral[0]};

      &::after {
        opacity: 0.15;
      }
    `};

  ${(props) =>
    props.states === "FOCUSED" &&
    css`
      background: ${ColorSystem.Primary[600]};
      color: ${ColorSystem.Neutral[0]};

      &::before {
        opacity: 1;
      }
    `};

  ${(props) =>
    props.states === "LOADING" &&
    css`
      background: ${ColorSystem.Primary[600]};
      color: ${ColorSystem.Neutral[0]};
    `};

  ${(props) =>
    props.states === "DISABLED" &&
    css`
      background: ${ColorSystem.Neutral[100]};
      color: ${ColorSystem.Neutral[600]};
    `};
`;
