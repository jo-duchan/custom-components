import React from "react";
import styled from "styled-components";

// Type
interface Props {
  label?: string;
}

function Checkbox({ label }: Props) {
  return (
    <Container>
      <Label htmlFor={label}>Label</Label>
      <CheckboxElm type="checkbox" id={label} />
    </Container>
  );
}

export default Checkbox;

Checkbox.defaultProps = {
  label: undefined,
};

const Container = styled.div``;

const Label = styled.label``;

const CheckboxElm = styled.input``;
