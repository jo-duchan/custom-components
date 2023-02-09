import React, { useEffect, useCallback } from "react";
import styled, { css } from "styled-components";

// Components
import IconSet from "components/IconSet";

// Style
import ColorSystem from "styles/color-system";
import { Heading, Text } from "styles/typography";
import { LayoutCenter } from "styles/common";
import { DropDownShadow } from "styles/shadow";

// Type
interface Props {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  status: "DEFAULT" | "ICON" | "SUCCESS" | "ERROR" | "LOADING";
  eyebrow: string;
  title: string;
  subTitle: string;
  content: string;
}

interface StyledProps {
  align?: "START" | "CENTER" | "END";
  bgType?: "ICON" | "SUCCESS" | "ERROR" | "LOADING";
}

function ModalHeader({
  modal,
  setModal,
  status,
  title,
  eyebrow,
  subTitle,
  content,
}: Props) {
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

  if (!modal) return <></>;

  return (
    <Container align={status === "DEFAULT" ? "START" : "CENTER"}>
      <Content>
        <CloseBtn onClick={() => setModal(false)}>
          <IconSet type="CLOSE" />
        </CloseBtn>
        {status !== "DEFAULT" && (
          <IconWrapper bgType={status}>{status}</IconWrapper>
        )}
        <Header>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Title>{title}</Title>
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
        </Header>
        <TextContent>{content}</TextContent>
      </Content>
      <Overlay />
    </Container>
  );
}

export default ModalHeader;

ModalHeader.defaultProps = {
  status: "DEFAULT",
  eyebrow: undefined,
  subTitle: undefined,
};

const Container = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 800;
  overflow: hidden;

  ${(props) => {
    switch (props.align) {
      case "START":
        return css`
          text-align: start;
        `;
      case "CENTER":
        return css`
          text-align: center;
        `;
      case "END":
        return css`
          text-align: end;
        `;
    }
  }}
`;

const Content = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 456px;
  height: auto;
  border-radius: 16px;
  padding: 36px;
  padding-top: 32px;
  box-sizing: border-box;
  background: ${ColorSystem.Neutral[0]};
  ${DropDownShadow.Dropdown};
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
  ${LayoutCenter};
  position: absolute;
  top: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  user-select: none;

  & svg {
    width: 15px;
    height: 15px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const Eyebrow = styled.div`
  text-transform: uppercase;
  color: ${ColorSystem.Neutral[600]};
  ${Text.Body300};
`;

const Title = styled.div`
  ${Heading.DefaultH2}
  color: ${ColorSystem.Neutral[900]};
`;

const SubTitle = styled.div`
  ${Text.Body400};
  color: ${ColorSystem.Neutral[600]};
`;

const IconWrapper = styled.div<StyledProps>`
  ${LayoutCenter};
  width: 64px;
  height: 64px;
  border-radius: 16px;
  margin: 0 auto 20px auto;

  ${(props) => {
    switch (props.bgType) {
      case "ICON":
        return css`
          background: ${ColorSystem.Neutral[100]};
        `;
      case "SUCCESS":
        return css`
          background: ${ColorSystem.Success[200]};
        `;
      case "ERROR":
        return css`
          background: ${ColorSystem.Error[200]};
        `;
      case "LOADING":
        return css`
          background: ${ColorSystem.Secondary[200]};
        `;
    }
  }}
`;

const TextContent = styled.div`
  ${Text.Body400};
  color: ${ColorSystem.Neutral[900]};
`;
