import React, { useState } from "react";
import styled, { css } from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

// Components
import IconSet from "components/IconSet";

// Type
interface Props {
  label: string;
  helpText: string;
}

interface StyledProps {
  isCopied: boolean;
}

function CopyText({ label, helpText }: Props) {
  const [copyValue, setCopyValue] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const onClickHandler = () => {
    if (!copyValue) {
      setCopied(false);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCopyValue(e.target.value);
  };

  const onCopyHandler = () => {
    if (!copyValue) {
      alert("It's empty.");
      setCopied(false);
      return;
    }

    window.navigator.clipboard.writeText(copyValue).then(() => {
      alert(`I copied a '${copyValue}'.`);
      setCopied(true);
    });
  };

  return (
    <Container>
      <Label onClick={onClickHandler}>
        {label}
        <InputWrapper>
          <InputInner
            onChange={onChangeHandler}
            value={copyValue}
            type="text"
          />
          <Button isCopied={copied} onClick={onCopyHandler} type="button">
            {copied && <IconSet type="SUCCESS_2" />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </InputWrapper>
      </Label>
      {helpText && <HelpText>{helpText}</HelpText>}
    </Container>
  );
}

export default CopyText;

CopyText.defaultProps = {
  label: undefined,
  helpText: undefined,
};

const Layout = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Container = styled.div`
  ${Layout};
  width: fit-content;
`;

const Label = styled.label`
  ${Layout};
  ${Text.Medium400};
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 264px;
  height: 48px;
  background: ${ColorSystem.Neutral[0]};
  border: 1px solid;
  border-color: ${ColorSystem.Neutral[300]};
  border-radius: 12px;
  padding-left: 16px;
  padding-right: 8px;
  box-sizing: border-box;
  transition: 200ms ease-in-out;
  transition-property: border-color;

  &:hover {
    border-color: ${ColorSystem.Neutral[400]};
  }
`;

const InputInner = styled.input`
  width: 50%;
  height: 32px;
  ${Text.Body400};
  color: ${ColorSystem.Neutral[900]};

  &:focus ~ button::after {
    opacity: 1;
  }
`;

const Button = styled.button<StyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: ${(props) => (props.isCopied ? "103px" : "67px")};
  height: 32px;
  background: ${ColorSystem.Primary[600]};
  border-radius: 12px;
  ${Text.Medium300};
  color: ${ColorSystem.Neutral[0]};
  cursor: pointer;
  user-select: none;
  transition: 200ms ease-in-out;
  transition-property: width;

  & svg {
    width: 20px;
    height: 20px;
    padding: 2px;
    box-sizing: border-box;
  }

  &::after {
    content: "";
    position: absolute;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    border: 2px solid;
    border-radius: 16px;
    border-color: rgba(33, 115, 223, 0.7);
    box-sizing: border-box;
    opacity: 0;
    transition: 200ms ease-in-out;
    transition-property: opacity;
  }
`;

const HelpText = styled.span`
  ${Text.Body300};
  color: ${ColorSystem.Neutral[600]};
`;
