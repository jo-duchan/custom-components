import React from "react";
import styled, { css } from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { LayoutCenter } from "styles/common";
import { Text } from "styles/typography";

// Components
import IconSet from "components/IconSet";

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  width?: string;
  placeholder?: string;
}

interface StyledProps {
  show?: boolean;
}

function Search({ value, onChange, width, placeholder }: Props) {
  return (
    <Container>
      <IconWraper>
        <IconSet type="SEARCH" />
      </IconWraper>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <CloseWrapper show={value.length !== 0} onClick={() => onChange("")}>
        <IconSet type="CLOSE" />
      </CloseWrapper>
    </Container>
  );
}

export default Search;

Search.defaultProps = {
  width: "",
  placeholder: "Search",
};

const Container = styled.label`
  display: flex;
  gap: 8px;
  width: 264px;
  height: 48px;
  border: 1px solid ${ColorSystem.Neutral[300]};
  border-radius: 12px;
  padding: 12px;
  box-sizing: border-box;
  transition: 200ms ease-in-out;
  transition-property: color, border-color;

  &:hover {
    border-color: ${ColorSystem.Neutral[400]};
  }

  &:has(input:focus) {
    padding: 13px;
    border-width: 0px;
    outline: 2px solid ${ColorSystem.Secondary[600]};
  }
`;

const IconWraper = styled.div`
  ${LayoutCenter};
  width: 24px;
  min-width: 24px;
  height: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: auto;
  ${Text.Body400};
  color: ${ColorSystem.Neutral[500]};
  cursor: text;
  &::placeholder {
    color: ${ColorSystem.Neutral[500]};
  }
`;

const CloseWrapper = styled.div<StyledProps>`
  ${LayoutCenter};
  width: 24px;
  min-width: 24px;
  height: 24px;
  background: transparent;
  border-radius: 100%;
  opacity: 0;
  transition: 200ms ease-in-out;
  transition-property: opacity, background;
  pointer-events: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${ColorSystem.Neutral[100]};
  }

  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
