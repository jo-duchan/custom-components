import React from "react";
import styled from "styled-components";

// Type

function Input() {
  return (
    <Container>
      <Label></Label>
      <InputElm></InputElm>
    </Container>
  );
}

export default Input;

const Container = styled.div``;

const Label = styled.label``;

const InputElm = styled.input``;
