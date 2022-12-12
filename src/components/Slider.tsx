import React from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";

function Slider() {
  return (
    <Container>
      <Knob />
      <Rail />
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  position: relative;
`;

const Knob = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  width: 20px;
  height: 20px;
  background: ${ColorSystem.Neutral[0]};
  border-radius: 10px;
  border: 0.5px solid ${ColorSystem.Neutral[500]};
  box-sizing: border-box;
  z-index: 2;
`;

const Rail = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate3d(0, -50%, 0);
  width: 264px;
  height: 2px;
  border-radius: 1px;
  background: ${ColorSystem.Neutral[300]};
  box-sizing: border-box;
  z-index: 0;
`;
