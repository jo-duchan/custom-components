import React, { useState } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { LayoutCenter } from "styles/common";
import { Text } from "styles/typography";

//Type
interface StyledProps {
    active: boolean;
}

function Chip() {
    const [ isActive, setIsActive ] = useState<boolean>(false);
    return (
        <Container active={isActive} onClick={() => setIsActive(!isActive)}>
            <TextWrapper>Text</TextWrapper>
        </Container>
    )
};

export default Chip;

const Container = styled.div<StyledProps>`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
gap: 8px;
width: fit-content;
height: 40px;
background: ${ColorSystem.Neutral[0]};
border: 1px solid ${ColorSystem.Neutral[300]};
border-radius: 20px;
//icon이 있으면 left value 수정 필요.
padding: 8px 20px;
box-sizing: border-box;
transition: 200ms ease-in-out;
transition-property: border;

&:hover {
    border-color: ${ColorSystem.Neutral[400]};
}

&::after {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    width: 100%;
    height: 100%;
    padding: 4px;
    outline: 2px solid rgba(33, 115, 223, 0.7);
    border-radius: 24px;
    opacity: ${props => props.active ? 1 : 0};
    transition: 200ms ease-in-out;
    transition-property: opacity;
}
`;

const TextWrapper = styled.span`
${Text.Body400};
color: ${ColorSystem.Neutral[900]};
`;