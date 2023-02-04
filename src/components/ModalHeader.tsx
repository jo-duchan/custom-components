import React, { useEffect } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Heading, Text } from "styles/typography";

// Type
interface Props {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalHeader({ modal, setModal }: Props) {
  useEffect(() => {
    const Root = document.body;
    if (modal) {
      Root.style.overflow = "hidden";
    }

    return () => {
      // Unmount
      Root.style.overflow = "auto";
    };
  }, [modal]);

  if (modal) {
    return (
      <Container>
        <Content>
          <CloseBtn onClick={() => setModal(false)}> </CloseBtn>
          <Eyebrow> </Eyebrow>
          <Icon>{/* Icon(State, Success, Error, Loading, icon) */}</Icon>
          <Title> </Title>
          <SubTitle> </SubTitle>
          <TextContent> </TextContent>
        </Content>
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
  z-index: 800;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 456px;
  /* height: auto */
  height: 196px;
  border-radius: 16px;
  padding: 36px;
  padding-top: 32px;
  box-sizing: border-box;
  background: ${ColorSystem.Neutral[0]};
  z-index: 900;
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

const CloseBtn = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  background: red;
  cursor: pointer;
  user-select: none;
`;

const Eyebrow = styled.div``;
const Icon = styled.div``;
const Title = styled.div``;
const SubTitle = styled.div``;
const TextContent = styled.div``;
