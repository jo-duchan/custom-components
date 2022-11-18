import { createGlobalStyle, css } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};

html, body {
    width: 100%;
    height: 100%;
};

button, input {
    all: unset;
};
`;

const LayoutCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, LayoutCenter };
