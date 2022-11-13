import React, { useEffect } from "react";
import styled from "styled-components";

// TYPE
import { States } from "type/button-type";

interface Props {
  states: States;
}

function Button({ states }: Props) {
  useEffect(() => {
    console.log(states);
  }, [states]);
  return <Container> </Container>;
}

export default Button;

const Container = styled.div``;
