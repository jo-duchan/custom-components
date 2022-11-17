import React, { useState } from "react";
import styled from "styled-components";

// Style
import ColorSystem from "styles/color-system";
import { Heading, Text } from "styles/typography";

// Components
import Button from "components/Button";

// Type
import { States } from "type/button-type";
type OptionList = {
  id: number;
  label: string;
  state: States;
  fixed: boolean;
  type: "STATES" | "FIXEDWIDTH";
}[];

const optionList: OptionList = [
  {
    id: 0,
    label: "Default",
    state: "DEFAULT",
    fixed: false,
    type: "STATES",
  },
  {
    id: 1,
    label: "Disabled",
    state: "DISABLED",
    fixed: false,
    type: "STATES",
  },
  {
    id: 2,
    label: "Focused",
    state: "FOCUSED",
    fixed: false,
    type: "STATES",
  },
  {
    id: 3,
    label: "Loading",
    state: "LOADING",
    fixed: false,
    type: "STATES",
  },
  {
    id: 3,
    label: "FixedWidth",
    state: "DEFAULT",
    fixed: true,
    type: "FIXEDWIDTH",
  },
];

function Test() {
  const [btnStates, setBtnStates] = useState<States>("DEFAULT");
  const [fixedWidth, setFixedWidth] = useState<boolean>(false);

  const handleClick = () => {
    alert("You clicked the button!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    state: States,
    fixed: boolean
  ) => {
    if (e.target.checked) {
      setBtnStates(state);
      setFixedWidth(fixed);
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
              onChange={(e) => {
                handleChange(e, item.state, item.fixed);
              }}
            />
            {item.label}
          </Label>
        ))}
      </List>
      <Button
        states={btnStates}
        size="LARGE"
        onClick={handleClick}
        fixedWidth={fixedWidth}
      />
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
