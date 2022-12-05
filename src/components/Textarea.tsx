import React from "react";
import styled from "styled-components";

// Type
import { TextareaProps } from "type/textarea-type";

function Textarea({ size, label, placeholder }: TextareaProps) {
  return (
    <Container>
      {label && <Label htmlFor={label}>{label}</Label>}
      <TextareaElm id={label} placeholder={placeholder} />
    </Container>
  );
}

export default Textarea;

Textarea.defaultProps = {
  size: "SMALL",
  label: undefined,
  placeholder: "Placeholder",
};

const Container = styled.div``;

const Label = styled.label``;

const TextareaElm = styled.textarea``;
