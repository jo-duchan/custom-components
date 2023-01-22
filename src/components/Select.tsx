import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Type
interface Props {
    label?: string;
    placeholder?: string;
    option: string[] | number[] | (string | number)[]
    onChange: (value: string | number) => void;
}

function Select({ label, placeholder, option, onChange }:Props) {
    const [isClick, setIsClick] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState<string | number | undefined>(placeholder);

    // Show & Hide Option
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setIsClick(!isClick)
    }

    // Select Option
    const handleOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, value: string | number) => {
        e.stopPropagation();
        console.log(`Select Option: ${value}`);
        setIsClick(false);
        setSelectValue(value);
    }

    // Callback
    useEffect(() => {
        if (!selectValue) return;
        
        onChange(selectValue);

    }, [selectValue, onChange])

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
        }
      
    }, [isClick])


    return (
        <Container>
            <InputWrapper onClick={handleClick}>
            {label && <Label>{label}</Label>}
                <InputElement value={selectValue} disabled />
            </InputWrapper>
            {isClick &&
                <OptionWrapper>
                    {option.map((value, index) =>
                        <Option
                            key={index}
                            onClick={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOption(e, value)}
                        >
                            {value}
                        </Option>
                    )}
                </OptionWrapper>
            }
        </Container>
    )
};

export default Select;

Select.defaultProps = {
    label: undefined,
    placeholder: undefined,
}

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
background: pink;
/* Fixed Width 처리 필요 */
width: 264px;
`;

const Label = styled.label``

const InputElement = styled.input``


const OptionWrapper = styled.div`
width: 100px;
height: 100px;
background: blue;
`;

const Option = styled.div``;