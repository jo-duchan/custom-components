import React from "react";
import styled, { css } from "styled-components";

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
  ${(props) => {
    switch (props.size) {
      case "SMALL":
        return css``;
      case "MEDIUM":
        return css``;
      case "LARGE":
        return css``;
      default:
        return css``;
    }
  }}
`;
