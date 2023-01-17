import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

// Style
import { LayoutCenter } from "styles/common";
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";
import { OtherShadow } from "styles/shadow";

// Type
interface Props {
  content: { label: string; value: boolean }[];
  setContent: React.Dispatch<
    React.SetStateAction<
      {
        label: string;
        value: boolean;
      }[]
    >
  >;
}

interface StyledProps {
  active?: boolean;
  posIdx?: number;
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
  return (
    <Container>
      <Tab>
        {content.map((content, index) => (
          <Label
            active={content.value}
            onClick={() => handleClick(index)}
            key={index}
          >
            {`${content.label}`}
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
  ${LayoutCenter};
  width: 120px;
  height: 100%;
  cursor: pointer;
  user-select: none;

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
