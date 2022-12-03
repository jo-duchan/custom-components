import React from "react";
import styled from "styled-components";

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
`;
