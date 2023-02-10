import React, { useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";

// Components
import IconSet from "components/IconSet";

// Style
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

// Type
import { States, EventType, ValueType } from "type/select-type";

interface Props {
  width?: number;
  states?: States;
  label?: string;
  placeholder?: string;
  helpText?: string;
  errorText?: string;
  option: string[] | number[] | (string | number)[];
  onChange: (value: ValueType) => void;
}

interface StyledProps {
  width?: number;
  focused?: boolean;
  states?: States;
}

function Select({
  width,
  states,
  label,
  placeholder,
  helpText,
  errorText,
  option,
  onChange,
}: Props) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<ValueType | undefined>(
    undefined
  );

  // Show & Hide Option
  const handleClick = useCallback(
    (e: EventType) => {
      e.stopPropagation();
      if (states === "ERROR" || states === "DISABLED") return;
      setIsClick(!isClick);
    },
    [isClick, states]
  );

  // Select Option
  const handleOption = useCallback((e: EventType, value: ValueType) => {
    e.stopPropagation();
    setIsClick(false);
    setSelectValue(value);
  }, []);

  // Callback
  useEffect(() => {
    if (!selectValue) return;

    onChange(selectValue);
  }, [selectValue, onChange]);

  // Outer Click, Remove Option Area
  useEffect(() => {
    function handleOuter() {
      setIsClick(false);
      window.removeEventListener("click", handleOuter);
    }

    if (isClick) {
      window.addEventListener("click", handleOuter);
    }

    return () => {
      window.removeEventListener("click", handleOuter);
    };
  }, [isClick]);

  return (
    <Container width={width}>
      {label && <Label onClick={handleClick}>{label}</Label>}
      <InputWrapper>
        <InputOuter onClick={handleClick} focused={isClick} states={states}>
          <InputElement
            placeholder={placeholder}
            value={
              selectValue === undefined || selectValue === null
                ? ""
                : selectValue
            }
            disabled
          />
          <IconSet type="CHEVRON-DOWN" />
        </InputOuter>
        {isClick && (
          <OptionWrapper>
            {option.map((value, index) => (
              <Option
                key={index}
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                  handleOption(e, value)
                }
              >
                {value}
              </Option>
            ))}
          </OptionWrapper>
        )}
      </InputWrapper>
      {helpText && !isClick && <HelpText>{helpText}</HelpText>}
      {states === "ERROR" && !isClick && (
        <ErrorText>
          <IconSet type="ERROR_2" />
          {errorText}
        </ErrorText>
      )}
    </Container>
  );
}

export default Select;

Select.defaultProps = {
  width: 264,
  states: "DEFAULT",
  label: undefined,
  placeholder: undefined,
  helpText: undefined,
  errorText: undefined,
};

const Container = styled.div<StyledProps>`
  position: relative;
  width: ${(props) => `${props.width}px`};
  display: flex;
  flex-direction: column;
  gap: 4px;
  & :is(div, span) {
    cursor: pointer;
    user-select: none;
  }
`;

const Label = styled.span`
  width: fit-content;
  ${Text.Medium400};
`;

const HelpText = styled.span`
  ${Text.Body300};
  color: ${ColorSystem.Neutral[600]};
  cursor: text !important;
  user-select: text !important;
`;

const ErrorText = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  ${Text.Medium300};
  color: ${ColorSystem.Error[600]};
  cursor: text !important;
  user-select: text !important;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputOuter = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 12px 14px 12px 16px;
  border-radius: 12px;
  box-sizing: border-box;
  background: ${ColorSystem.Neutral[0]};
  border: 1px solid;
  border-color: ${ColorSystem.Neutral[300]};
  ${Text.Body400};
  color: ${ColorSystem.Neutral[900]};
  transition: 200ms ease-in-out;
  transition-property: border-color;

  & svg {
    transition: 250ms ease-in-out;
    transition-property: transform;
  }

  ${(props) =>
    props.focused &&
    css`
      padding: 13px 15px 13px 17px;
      border-width: 0;
      outline: 2px solid ${ColorSystem.Secondary[600]};

      & svg {
        transform: rotate(180deg);
      }
    `};

  ${(props) => {
    switch (props.states) {
      case "ERROR":
        return css`
          border-color: ${ColorSystem.Error[600]};
        `;
      case "DISABLED":
        return css`
          background: ${ColorSystem.Neutral[100]};
          border-color: ${ColorSystem.Neutral[200]};
          color: ${ColorSystem.Neutral[400]};

          & input::placeholder {
            color: ${ColorSystem.Neutral[400]};
          }
          & svg path {
            fill: ${ColorSystem.Neutral[400]};
          }
        `;
      default:
        return css`
          &:hover {
            border-color: ${ColorSystem.Neutral[500]};
          }
        `;
    }
  }}
`;

const InputElement = styled.input`
  &::placeholder {
    color: ${ColorSystem.Neutral[500]};
  }
`;

const OptionWrapper = styled.div`
  position: absolute;
  margin-top: 10px;
  width: 100%;
  height: auto;
  padding: 12px 0;
  border-radius: 12px;
  box-sizing: border-box;
  background: ${ColorSystem.Neutral[0]};
  border: 1px solid ${ColorSystem.Neutral[300]};
  z-index: 400;
`;

const Option = styled.div`
  padding: 8px 16px;
  ${Text.Body400};
  color: ${ColorSystem.Neutral[900]};
`;
