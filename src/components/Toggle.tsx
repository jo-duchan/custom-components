import React from "react";
import styled, { css } from "styled-components";
import ColorSystem from "styles/color-system";

// Type
import { Sizes } from "type/toggle-type";
interface Props {
  size?: Sizes;
}

interface StyledProps {
  size: Sizes | undefined;
}

function Toggle({ size }: Props) {
  return <Container size={size}> </Container>;
}

export default Toggle;

Toggle.defaultProps = {
  size: "MEDIUM",
};

const Container = styled.div<StyledProps>`
  position: relative;
  background: ${ColorSystem.Neutral[400]};
  border-radius: 100px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    background: ${ColorSystem.Neutral[0]};
    border-radius: 100%;
  }
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
            left: 3px;
            width: 18px;
            height: 18px;
          }
        `;
      case "LARGE":
        return css`
          width: 60px;
          height: 32px;
          &::before {
            left: 4px;
            width: 24px;
            height: 24px;
          }
        `;
      default:
        return css``;
    }
  }}
`;
