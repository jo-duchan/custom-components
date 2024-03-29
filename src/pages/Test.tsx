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
import Slider from "components/Slider";
import Chip from "components/Chip";
import PillTab from "components/PillTab";
import Select from "components/Select";
import ModalHeader from "components/ModalHeader";
import CopyText from "components/CopyText";

// Type
import { States } from "type/button-type";

function Test() {
  const [btnStates, setBtnStates] = useState<States>("DEFAULT");
  const [fixedWidth, setFixedWidth] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [slideValue, setSlideValue] = useState<number>(0);
  const [content, setContent] = useState([
    { label: "Label01", value: true },
    { label: "Label02", value: false },
    { label: "Label03", value: false },
    { label: "Label04", value: false },
  ]);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    console.log(`퍼센트는 : ${slideValue} %`);
  }, [slideValue]);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => {
    e?.preventDefault();
    // alert("You clicked the button!");
    setCount((current) => (current = current + 1));
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

  const handleSelect = (value: string | number) => {
    console.log(`Select Value는 : ${value}`);
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
        <Count>{`Count: ${count}`}</Count>
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
      <Section>
        <Slider setValue={setSlideValue} />
      </Section>
      <Section>
        <Chip emoji="😆" text="Text" size="MEDIUM" />
      </Section>
      <Section>
        <PillTab content={content} setContent={setContent} />
      </Section>
      <Section>
        <Select
          label="Label"
          placeholder="Placeholder"
          // helpText="Help"
          // errorText="Error"
          // states="DISABLED"
          option={[0, 1, 2, 3]}
          onChange={handleSelect}
        />
      </Section>
      <Section>
        <ModalHeader
          modal={modal}
          setModal={setModal}
          // status="SUCCESS"
          // status="ERROR"
          status="PROGRESS"
          // eyebrow="eyebrow"
          title="Title"
          // subTitle="Lorem ipsum dolor sit amet conse"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Button
          label="Modal"
          btnType="SECONDARY"
          states={btnStates}
          size="MEDIUM"
          onClick={() => setModal(true)}
          fixedWidth={fixedWidth}
        />
      </Section>
      <Section>
        <CopyText width="400" label="Label" helpText="Help text" />
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
  height: auto;
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

const Count = styled.span`
  ${Text.Body400};
`;
