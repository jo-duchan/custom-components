import React, { useState } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Heading, Text } from "styles/typography";

// Components
import Button from "components/Button";

// Type
import { States } from "type/button-type";

const optionList: { id: number; val: States }[] = [
  {
    id: 0,
    val: "DEFAULT",
  },
  {
    id: 1,
    val: "DISABLED",
  },
  {
    id: 2,
    val: "FOCUSED",
  },
  {
    id: 3,
    val: "LOADING",
  },
];

function Test() {
  const [btnStates, setBtnStates] = useState<States>("DEFAULT");

  const handleClick = () => {
    alert("You clicked the button!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    val: States
  ) => {
    if (e.target.checked) {
      setBtnStates(val);
    }
  };

  return (
    <Container>
      <h3>Test</h3>
      <List>
        {optionList.map((item) => (
          <Label key={item.id}>
            <Option
              name="ButtonStates"
              type="radio"
              onChange={(e) => handleChange(e, item.val)}
            />
            {item.val}
          </Label>
        ))}
      </List>
      <Button states={btnStates} size="LARGE" onClick={handleClick} />
    </Container>
  );
}

export default Test;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;

  & h3 {
    ${Heading.DefaultH1};
  }
`;

const List = styled.div`
  display: flex;
  gap: 24px;
`;

const Option = styled.input`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${ColorSystem.Neutral[100]};
  border: 2px solid ${ColorSystem.Secondary[600]};
  box-sizing: border-box;
  transition: 200ms ease-in-out;
  transition-property: background;

  &:checked {
    background: ${ColorSystem.Secondary[600]};
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  ${Text.Body400};
  cursor: pointer;
  user-select: none;
`;
