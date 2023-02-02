import React from "react";
import styled from "styled-components";

function ModalHeader() {
  return (
    <Container>
      <Content> </Content>
      <Overlay />
    </Container>
  );
}

export default ModalHeader;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(50%, 50%, 0);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
`;
