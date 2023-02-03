import React, { useEffect } from "react";
import styled from "styled-components";

// Type
interface Props {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalHeader({ modal, setModal }: Props) {
  useEffect(() => {
    const Root = document.body;
    Root.style.overflow = "hidden";

    return () => {
      console.log("Unmount");
      Root.style.overflow = "auto";
    };
  }, []);

  if (modal) {
    return (
      <Container onClick={() => setModal(false)}>
        <Content> </Content>
        <Overlay />
      </Container>
    );
  } else {
    return <></>;
  }
}

export default ModalHeader;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  overflow: hidden;
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
