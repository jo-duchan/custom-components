import React, { useState } from "react";
import styled, { css } from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

//Type
import { ChipSize } from "type/chip-type";

interface Props {
  emoji?: string | undefined;
  icon?: string | undefined;
  text?: string;
  size?: ChipSize;
}
interface StyledProps {
  active: boolean;
  paddingLeft: boolean;
  size: ChipSize | undefined;
}

function Chip({ emoji, icon, text, size }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container
      size={size}
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
  size: "MEDIUM",
};

const TextWrapper = styled.span`
  color: ${ColorSystem.Neutral[900]};
`;

const Container = styled.div<StyledProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: fit-content;
  background: ${ColorSystem.Neutral[0]};
  border: 1px solid ${ColorSystem.Neutral[300]};
  padding: ${(props) => (props.paddingLeft ? "8px 20px 8px 16px" : "8px 20px")};
  box-sizing: border-box;
  transition: 200ms ease-in-out;
  transition-property: border;
  cursor: pointer;
  user-select: none;

  ${(props) => {
    switch (props.size) {
      case "SMALL":
        return css`
          height: 36px;
          border-radius: 18px;
          ${TextWrapper} {
            ${Text.Body300}
          }
        `;
      case "MEDIUM":
        return css`
          height: 40px;
          border-radius: 20px;
          ${TextWrapper} {
            ${Text.Body400}
          }
        `;
      default:
        return css``;
    }
  }}

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
