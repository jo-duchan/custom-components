import React from "react";
import styled, { css } from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

// Components
import IconSet from "./IconSet";

// Type
import { TextareaProps, Sizes } from "type/textarea-type";

interface StyledProps {
  size?: Sizes;
  error?: boolean;
}

function Textarea({
  states,
  size,
  label,
  placeholder,
  errorText,
}: TextareaProps) {
  return (
    <Container>
      {label && <Label htmlFor={label}>{label}</Label>}
      <TextareaElm
        size={size}
        id={label}
        placeholder={placeholder}
        disabled={states === "DISABLED"}
        error={states === "ERROR"}
        autoComplete="off"
      />
      {states === "ERROR" && (
        <ErrorElement>
          <IconSet type="ERROR" />
          {errorText}
        </ErrorElement>
      )}
    </Container>
  );
}

export default Textarea;

Textarea.defaultProps = {
  states: "DEFAULT",
  size: "SMALL",
  label: undefined,
  placeholder: "Placeholder",
  errorText: "Error text",
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
  border-radius: 12px;
  border: 1px solid ${ColorSystem.Neutral[300]};
  padding: 12px 16px;
  box-sizing: border-box;
  resize: none;
  cursor: pointer;
  user-select: none;
  ${Text.Body400};
  color: ${ColorSystem.Neutral[900]};
  transition: 300ms ease-in-out;
  transition-property: background, border-color, color;

  &::placeholder {
    color: ${ColorSystem.Neutral[500]};
  }

  &:hover {
    border-color: ${ColorSystem.Neutral[400]};
  }

  &:focus {
    padding: 13px 17px;
    border-width: 0px;
    outline: 2px solid ${ColorSystem.Secondary[600]};
  }

  &:disabled {
    background: ${ColorSystem.Neutral[100]};
    color: ${ColorSystem.Neutral[500]};
    border-color: ${ColorSystem.Neutral[200]};
  }

  ${(props) =>
    props.error &&
    css`
      border-color: ${ColorSystem.Error[600]};

      &:focus {
        padding: 13px 17px;
        border-width: 0px;
        outline: 2px solid ${ColorSystem.Error[600]};
      }
    `}

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
`;

const ErrorElement = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  ${Text.Medium300};
  color: ${ColorSystem.Error[600]};

  & svg {
    margin-bottom: 2.5px;
  }
`;
