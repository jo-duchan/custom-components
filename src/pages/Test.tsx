import React, { useEffect, useState } from "react";
import styled from "styled-components";
import optionList from "optionData";

// Style
import ColorSystem from "styles/color-system";
import { Heading, Text } from "styles/typography";

// Components
import Button from "components/Button";
import Input from "components/Input";
import Checkbox from "components/Checkbox";
import Toggle from "components/Toggle";
import Search from "components/Search";
import Textarea from "components/Textarea";

// Type
import { States } from "type/button-type";

function Test() {
  const [btnStates, setBtnStates] = useState<States>("DEFAULT");
  const [fixedWidth, setFixedWidth] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => {
    e?.preventDefault();
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
      <Section>
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
          btnType="PRIMARY"
          states={btnStates}
          size="MEDIUM"
          onClick={handleClick}
          fixedWidth={fixedWidth}
        />
      </Section>
      <Section>
        <Input states="ERROR" label="Label" placeholder="Placeholder" />
      </Section>
      <Section>
        <Checkbox label="Text" />
      </Section>
      <Section>
        <Toggle checked={checked} onClick={() => setChecked(!checked)} />
      </Section>
      <Section>
        <Search value={searchValue} onChange={setSearchValue} />
      </Section>
      <Section>
        <Textarea states="DEFAULT" label="Label" />
      </Section>
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px;
  border: 2px solid ${ColorSystem.Primary[600]};
  border-radius: 16px;
  margin-bottom: 20px;
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
