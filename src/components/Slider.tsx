import React, { useState } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";

// Type
interface StyledProps {
  sliderPos: number;
}

function Slider() {
  const [sliderPos, setSliderPos] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const downX = e.clientX;
    const orgSliderX = sliderPos;

    const handleMouseMove = (ev: MouseEvent) => {
      ev.preventDefault();
      const dx = ev.clientX - downX;
      const pos = Math.max(Math.min(orgSliderX + dx, 264), 0);
      setSliderPos(pos);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <Container>
      <Rail sliderPos={sliderPos}>
        <Knob onMouseDown={handleMouseDown} sliderPos={sliderPos} />
      </Rail>
      {/* {Math.round((sliderPos / 264) * 100)} */}
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: 20px;
`;

const Knob = styled.div<StyledProps>`
  position: absolute;
  top: 50%;
  left: ${(props) => `calc(${props.sliderPos}px - 10px)`};
  transform: translate3d(0, -50%, 0);
  width: 20px;
  height: 20px;
  background: ${ColorSystem.Neutral[0]};
  border-radius: 10px;
  border: 0.5px solid ${ColorSystem.Neutral[500]};
  box-shadow: 0px 0px 8px -4px rgba(20, 23, 26, 0.12),
    0px 4px 16px -1px rgba(20, 23, 26, 0.08);
  box-sizing: border-box;
  z-index: 2;
  cursor: pointer;
  user-select: none;
`;

const Rail = styled.div<StyledProps>`
  position: relative;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: 264px;
  height: 3px;
  margin: 0 10px;
  border-radius: 2px;
  background: ${ColorSystem.Neutral[300]};
  box-sizing: border-box;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: ${(props) => `${props.sliderPos}px`};
    height: 100%;
    border-radius: 2px;
    background: red;
  }
`;
