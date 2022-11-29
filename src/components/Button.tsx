import React, { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

// Style
import { LayoutCenter } from "styles/common";
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

// Components
import IconSet from "./IconSet";

// Type
import { ButtonProps, States, Sizes } from "type/button-type";

interface StyledProps {
  btnType?: boolean;
  states?: States;
  size?: Sizes;
  fixedWidth?: boolean;
}

function Button({
  btnType,
  states,
  size,
  fixedWidth,
  label,
  onClick,
}: ButtonProps) {
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
      btnType={btnType === "PRIMARY"}
      states={states}
      size={size}
      fixedWidth={fixedWidth}
      disabled={states === "DISABLED"}
      onClick={onClick}
      ref={Btn}
    >
      {states === "LOADING" ? (
        <LoadingMotion>
          <IconSet type="PROGRESS" />
        </LoadingMotion>
      ) : (
        <> {label}</>
      )}
    </Container>
  );
}

export default Button;

Button.defaultProps = {
  btnType: "PRIMARY",
  states: "DEFAULT",
  size: "MEDIUM",
  fixedWidth: false,
  label: "Button",
};

const AniMation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const LoadingMotion = styled.div`
  ${LayoutCenter};
  animation: ${AniMation} 1000ms ease-in-out infinite;
`;

const Primary = css`
  background: ${ColorSystem.Primary[600]};
  color: ${ColorSystem.Neutral[0]};

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

const Secondary = css`
  background: ${ColorSystem.Neutral[0]};
  color: ${ColorSystem.Primary[600]};
  border: 1px solid ${ColorSystem.Neutral[300]};

  &:hover {
    background: ${ColorSystem.Neutral[100]};
  }

  &:focus {
    border: 2px solid rgba(33, 115, 223, 0.7);
  }

  &:disabled {
    background: ${ColorSystem.Neutral[100]};
    color: ${ColorSystem.Neutral[600]};
    border: 1px solid ${ColorSystem.Neutral[100]};
  }

  ${LoadingMotion} {
    svg path {
      fill: ${ColorSystem.Primary[600]};
    }
  }
`;

const Container = styled.button<StyledProps>`
  position: relative;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: 300ms ease-in-out;
  transition-property: background, border, color;

  ${(props) =>
    props.btnType
      ? css`
          ${Primary}
        `
      : css`
          ${Secondary}
        `}

  ${(props) => {
    switch (props.size) {
      case "XSMALL":
        return css`
          width: ${props.fixedWidth ? "100%" : "80px"};
          height: 32px;
          ${Text.Medium300};
        `;
      case "SMALL":
        return css`
          width: ${props.fixedWidth ? "100%" : "88px"};
          height: 40px;
          ${Text.Medium300};
        `;
      case "MEDIUM":
        return css`
          width: ${props.fixedWidth ? "100%" : "111px"};
          height: 48px;
          ${Text.Medium400};
        `;
      case "LARGE":
        return css`
          width: ${props.fixedWidth ? "100%" : "133px"};
          height: 60px;
          ${Text.Medium500};
        `;
      case "XLARGE":
        return css`
          width: ${props.fixedWidth ? "100%" : "135px"};
          height: 68px;
          ${Text.Bold500};
        `;
      default:
        return css``;
    }
  }};
`;
