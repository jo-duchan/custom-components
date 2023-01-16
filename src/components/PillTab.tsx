import React, { useEffect } from "react";
import styled from "styled-components";

// Type
interface Props {
  content: { label: string; value: boolean }[];
  setContent: React.Dispatch<
    React.SetStateAction<
      {
        label: string;
        value: boolean;
      }[]
    >
  >;
}

function PillTab({ content, setContent }: Props) {
  useEffect(() => {
    console.log(content);
  }, [content]);

  const handleClick = (index: number) => {
    const newArray = [...content];
    newArray[index].value = !newArray[index].value;
    setContent(newArray);
  };
  return (
    <Container>
      {content.map((content, index) => (
        <Tab onClick={() => handleClick(index)} key={index}>
          {`${content.value}`}
        </Tab>
      ))}
    </Container>
  );
}

export default PillTab;

const Container = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  height: 40px;
`;

const Tab = styled.div`
  width: 120px;
  height: 100%;
  background: pink;
`;
