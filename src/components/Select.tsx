import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import IconSet from "components/IconSet";

// Style
import ColorSystem from "styles/color-system";
import { Text } from "styles/typography";

// Type
interface Props {
  states?: "DEFAULT" | "FOCUSED" | "DISABLED" | "ERROR";
  label?: string;
  placeholder?: string;
  helpText?: string;
  errorText?: string;
  option: string[] | number[] | (string | number)[];
  onChange: (value: string | number) => void;
}

function Select({
  states,
  label,
  placeholder,
  helpText,
  errorText,
  option,
  onChange,
}: Props) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string | number | undefined>(
    undefined
  );

  // Show & Hide Option
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (states === "ERROR") return;
    setIsClick(!isClick);
  };

  // Select Option
  const handleOption = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string | number
  ) => {
    e.stopPropagation();
    // if (!selectValue) return;
    console.log(`Select Option: ${value}`);
    setIsClick(false);
    setSelectValue(value);
  };

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
    <Container>
      {label && <Label onClick={handleClick}>{label}</Label>}
      <InputWrapper>
        <InputOuter onClick={handleClick}>
          <InputElement
            placeholder={placeholder}
            value={
              selectValue === undefined || selectValue === null
                ? ""
                : selectValue
            }
            disabled
          />
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
          <IconSet type="ERROR" />
          {errorText}
        </ErrorText>
      )}
    </Container>
  );
}

export default Select;

Select.defaultProps = {
  states: "DEFAULT",
  label: undefined,
  placeholder: undefined,
  helpText: undefined,
  errorText: undefined,
};

const Container = styled.div`
  /* Fixed Width 처리 필요 */
  position: relative;
  width: 264px;
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

const InputOuter = styled.div``;

const InputElement = styled.input`
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

  &::placeholder {
    color: ${ColorSystem.Neutral[500]};
  }

  &:hover {
    border-color: ${ColorSystem.Neutral[500]};
  }

  /* States로 수정 필요 */
  /* &:focus {
    outline: 2px solid ${ColorSystem.Secondary[600]};
  } */
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
`;

const Option = styled.div`
  padding: 8px 16px;
  ${Text.Body400};
  color: ${ColorSystem.Neutral[900]};
`;
