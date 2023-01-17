import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

// Style
import { LayoutCenter } from "styles/common";
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";
import { OtherShadow } from "styles/shadow";

// Type
import { ContentType, SetContentType, LineType } from "type/pilltab-type";
interface Props {
  content: ContentType;
  setContent: SetContentType;
}

interface StyledProps {
  active?: boolean;
  posIdx?: number;
  line?: LineType;
}

function PillTab({ content, setContent }: Props) {
  const [posIdx, setPosIdx] = useState<number>(0);
  useEffect(() => {
    console.log(content);
  }, [content]);

  const handleClick = (index: number) => {
    const newArray = [...content];
    newArray.forEach((item) => {
      if (item === newArray[index]) {
        item.value = true;
      } else {
        item.value = false;
      }
    });
    setPosIdx(index);
    setContent(newArray);
  };

  const calcDirection = (index: number, value: boolean): LineType => {
    if (
      index !== 0 &&
      index + 1 !== content.length &&
      !value &&
      index < posIdx
    ) {
      return "LEFT";
    }

    if (
      index !== 0 &&
      index + 1 !== content.length &&
      !value &&
      index > posIdx
    ) {
      return "RIGHT";
    }

    return "NONE";
  };
  return (
    <Container>
      <Tab>
        {content.map((item, index) => (
          <Label
            active={item.value}
            line={calcDirection(index, item.value)}
            onClick={() => handleClick(index)}
            key={index}
          >
            {`${item.label}`}
          </Label>
        ))}
      </Tab>
      <Pill posIdx={posIdx} />
    </Container>
  );
}

export default PillTab;

const Container = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  height: 40px;
  background: ${ColorSystem.Neutral[100]};
  border-radius: 20px;
  overflow: hidden;
`;

const Tab = styled.div`
  display: flex;
  z-index: 10;
  width: fit-content;
  height: 100%;
`;

const Label = styled.span<StyledProps>`
  position: relative;
  ${LayoutCenter};
  width: 120px;
  height: 100%;
  cursor: pointer;
  user-select: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 1px;
    height: 16px;
    background: ${ColorSystem.Neutral[300]};
    opacity: 0;
    transition: 200ms ease-in-out;
    transition-property: opacity;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0mm;
    width: 1px;
    height: 16px;
    background: ${ColorSystem.Neutral[300]};
    opacity: 0;
    transition: 200ms ease-in-out;
    transition-property: opacity;
  }

  ${(props) => {
    switch (props.line) {
      case "LEFT":
        return css`
          &::after {
            opacity: 1;
          }

          &::before {
            opacity: 0;
          }
        `;
      case "RIGHT":
        return css`
          &::after {
            opacity: 0;
          }

          &::before {
            opacity: 1;
          }
        `;
      case "NONE":
        return css`
          &::after {
            opacity: 0;
          }

          &::before {
            opacity: 0;
          }
        `;
      default:
        return;
    }
  }}

  ${(props) =>
    props.active
      ? css`
          ${Text.Medium300};
          color: ${ColorSystem.Neutral[900]};
        `
      : css`
          ${Text.Body300};
          color: ${ColorSystem.Neutral[700]};
        `};
  transition: 200ms ease-in-out;
  transition-property: color;
`;

const Pill = styled.div<StyledProps>`
  position: absolute;
  top: 4px;
  left: ${(props) => `calc(4px + (120px * ${props.posIdx}))`};
  width: 112px;
  height: 32px;
  border-radius: 16px;
  background: ${ColorSystem.Neutral[0]};
  ${OtherShadow.Small};
  transition: 200ms ease-in-out;
  transition-property: left;
`;
