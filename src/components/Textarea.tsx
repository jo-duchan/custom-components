import React from "react";
import styled, { css } from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Heading, Text } from "styles/typography";

// Type
import { TextareaProps, Sizes } from "type/textarea-type";

interface StyledProps {
  size?: Sizes;
}

function Textarea({ size, label, placeholder }: TextareaProps) {
  return (
    <Container>
      {label && <Label htmlFor={label}>{label}</Label>}
      <TextareaElm size={size} id={label} placeholder={placeholder} />
    </Container>
  );
}

export default Textarea;

Textarea.defaultProps = {
  size: "SMALL",
  label: undefined,
  placeholder: "Placeholder",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  ${Text.Medium400};
  color: ${ColorSystem.Neutral[900]};
`;

const TextareaElm = styled.textarea<StyledProps>`
  ${(props) => {
    switch (props.size) {
      case "SMALL": {
        return css`
          width: 264px;
          height: 120px;
        `;
      }
      case "MEDIUM": {
        return css`
          width: 264px;
          height: 160px;
        `;
      }
      case "LARGE": {
        return css`
          width: 264px;
          height: 200px;
        `;
      }
      default: {
        return css``;
      }
    }
  }}
  border-radius: 12px;
  border: 1px solid ${ColorSystem.Neutral[300]};
  padding: 12px 16px;
  box-sizing: border-box;
  resize: none;
  ${Text.Body400};
  color: ${ColorSystem.Neutral[900]};

  &::placeholder {
    color: ${ColorSystem.Neutral[500]};
  }
`;
