import React from "react";
import styled, { css } from "styled-components";
import ColorSystem from "styles/color-system";

// Type
import { Sizes } from "type/toggle-type";

interface Props {
  size?: Sizes;
  checked: boolean;
  onClick: () => void;
}

interface StyledProps {
  size: Sizes | undefined;
  checked: boolean;
}

function Toggle({ size, checked, onClick }: Props) {
  return <Container onClick={onClick} size={size} checked={checked} />;
}

export default Toggle;

Toggle.defaultProps = {
  size: "MEDIUM",
};

const Container = styled.div<StyledProps>`
  position: relative;
  border-radius: 100px;
  cursor: pointer;
  user-select: none;
  transition: 200ms ease-in-out;
  transition-property: background;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    background: ${ColorSystem.Neutral[0]};
    border-radius: 100%;
    transition: 200ms ease-in-out;
    transition-property: transform;
  }

  ${(props) =>
    props.checked
      ? css`
          background: ${ColorSystem.Secondary[600]};
          &::before {
            transform: translate3d(100%, -50%, 0);
          }
        `
      : css`
          background: ${ColorSystem.Neutral[400]};
          &::before {
            transform: translate3d(0, -50%, 0);
          }
        `}

  ${(props) => {
    switch (props.size) {
      case "SMALL":
        return css`
          width: 36px;
          height: 20px;

          &::before {
            left: 2px;
            width: 16px;
            height: 16px;
          }
        `;
      case "MEDIUM":
        return css`
          width: 44px;
          height: 24px;
          &::before {
            left: 4px;
            width: 18px;
            height: 18px;
          }
        `;
      case "LARGE":
        return css`
          width: 60px;
          height: 32px;
          &::before {
            left: 6px;
            width: 24px;
            height: 24px;
          }
        `;
      default:
        return css``;
    }
  }}
`;
