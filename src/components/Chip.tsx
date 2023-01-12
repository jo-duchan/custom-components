import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { LayoutCenter } from "styles/common";
import { Text } from "styles/typography";

//Type
interface Props {
  emoji?: string | undefined;
  icon?: string | undefined;
  text?: string;
}
interface StyledProps {
  active: boolean;
  paddingLeft: boolean;
}

function Chip({ emoji, icon, text }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container
      active={isActive}
      paddingLeft={!emoji || !icon}
      onClick={() => setIsActive(!isActive)}
    >
      {emoji && <TextWrapper>{emoji}</TextWrapper>}
      <TextWrapper>{text}</TextWrapper>
    </Container>
  );
}

export default Chip;

Chip.defaultProps = {
  emoji: undefined,
  icon: undefined,
  text: "Text",
};

const Container = styled.div<StyledProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: fit-content;
  height: 40px;
  background: ${ColorSystem.Neutral[0]};
  border: 1px solid ${ColorSystem.Neutral[300]};
  border-radius: 20px;
  padding: ${(props) => (props.paddingLeft ? "8px 20px 8px 16px" : "8px 20px")};
  box-sizing: border-box;
  transition: 200ms ease-in-out;
  transition-property: border;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: ${ColorSystem.Neutral[400]};
  }

  &::after {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    width: 100%;
    height: 100%;
    padding: 4px;
    outline: 2px solid rgba(33, 115, 223, 0.7);
    border-radius: 24px;
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: 200ms ease-in-out;
    transition-property: opacity;
  }
`;

const TextWrapper = styled.span`
  ${Text.Body400};
  color: ${ColorSystem.Neutral[900]};
`;
