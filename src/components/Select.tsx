import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Select() {
    const [isClick, setIsClick] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setIsClick(!isClick)
    }

    const handleOption = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        console.log("Option");
    }

    useEffect(() => {
        console.log(isClick);

        function handleOuter(ev: MouseEvent) {
            // ev.stopPropagation();
            console.log("Good");
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
            <InputWrapper onClick={handleClick}>InputWrapper</InputWrapper>
            {isClick && <OptionWrapper onClick={handleOption}>OptionWrapper</OptionWrapper>}
        </Container>
    )
};

export default Select;

const Container = styled.div`
/* width: 100px;
height: 100px; */

`;

const InputWrapper = styled.div`
width: 100px;
height: 100px;
background: pink;
`;


const OptionWrapper = styled.div`
width: 100px;
height: 100px;
background: blue;
`;