import { css } from "styled-components";

const FontSize = {
  100: css`
    font-size: 0.625rem;
    line-height: 0.75rem;
  `,
  200: css`
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  300: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
  400: css`
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  500: css`
    font-size: 1.125rem;
    line-height: 1.75rem;
  `,
  600: css`
    font-size: 1.25rem;
    line-height: 1.75rem;
  `,
  700: css`
    font-size: 1.5rem;
    line-height: 2rem;
  `,
  800: css`
    font-size: 1.75rem;
    line-height: 2.25rem;
  `,
  900: css`
    font-size: 2.25rem;
    line-height: 2.75rem;
  `,
};

const Heading = {
  DefaultH1: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 700;
    ${FontSize[900]};
  `,
  DefaultH2: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 700;
    ${FontSize[700]};
  `,
  DefaultH3: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 700;
    ${FontSize[500]};
  `,
  ThinH1: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 400;
    ${FontSize[900]};
  `,
  ThinH2: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 400;
    ${FontSize[700]};
  `,
  ThinH3: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 400;
    ${FontSize[500]};
  `,
};

const Text = {
  Body900: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[900]};
  `,
  Body800: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[800]};
  `,
  Body700: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[700]};
  `,
  Body600: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[600]};
  `,
  Body500: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[500]};
  `,
  Body400: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[400]};
  `,
  Body300: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[300]};
  `,
  Body200: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[200]};
  `,
  Body100: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[100]};
  `,
  Medium900: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[900]};
  `,
  Medium800: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[800]};
  `,
  Medium700: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[700]};
  `,
  Medium600: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[600]};
  `,
  Medium500: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[500]};
  `,
  Medium400: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[400]};
  `,
  Medium300: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[300]};
  `,
  Medium200: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[200]};
  `,
  Medium100: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[100]};
  `,
  Bold900: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[900]};
  `,
  Bold800: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[800]};
  `,
  Bold700: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[700]};
  `,
  Bold600: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[600]};
  `,
  Bold500: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[500]};
  `,
  Bold400: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[400]};
  `,
  Bold300: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[300]};
  `,
  Bold200: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[200]};
  `,
  Bold100: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[100]};
  `,
};

const Underlined = {
  Body800: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[800]};
    text-decoration: underline;
  `,
  Body700: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[700]};
    text-decoration: underline;
  `,
  Body600: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[600]};
    text-decoration: underline;
  `,
  Body500: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[500]};
    text-decoration: underline;
  `,
  Body400: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[400]};
    text-decoration: underline;
  `,
  Body300: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[300]};
    text-decoration: underline;
  `,
  Body200: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[200]};
    text-decoration: underline;
  `,
  Body100: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    ${FontSize[100]};
    text-decoration: underline;
  `,
  Medium800: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[800]};
    text-decoration: underline;
  `,
  Medium700: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[700]};
    text-decoration: underline;
  `,
  Medium600: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[600]};
    text-decoration: underline;
  `,
  Medium500: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[500]};
    text-decoration: underline;
  `,
  Medium400: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[400]};
    text-decoration: underline;
  `,
  Medium300: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[300]};
    text-decoration: underline;
  `,
  Medium200: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[200]};
    text-decoration: underline;
  `,
  Medium100: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[100]};
    text-decoration: underline;
  `,
  Bold800: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[800]};
    text-decoration: underline;
  `,
  Bold700: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[700]};
    text-decoration: underline;
  `,
  Bold600: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[600]};
    text-decoration: underline;
  `,
  Bold500: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[500]};
    text-decoration: underline;
  `,
  Bold400: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[400]};
    text-decoration: underline;
  `,
  Bold300: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[300]};
    text-decoration: underline;
  `,
  Bold200: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[200]};
    text-decoration: underline;
  `,
  Bold100: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    ${FontSize[100]};
    text-decoration: underline;
  `,
};

const Uppercase = {
  Medium800: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[800]};
    letter-spacing: 0.02em;
    text-transform: uppercase;
  `,
  Medium700: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[700]};
    letter-spacing: 0.02em;
    text-transform: uppercase;
  `,
  Medium600: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[600]};
    letter-spacing: 0.02em;
    text-transform: uppercase;
  `,
  Medium500: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[500]};
    letter-spacing: 0.02em;
    text-transform: uppercase;
  `,
  Medium400: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[400]};
    letter-spacing: 0.02em;
    text-transform: uppercase;
  `,
  Medium300: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[300]};
    letter-spacing: 0.02em;
    text-transform: uppercase;
  `,
  Medium200: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[200]};
    letter-spacing: 0.02em;
    text-transform: uppercase;
  `,
  Medium100: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    ${FontSize[100]};
    letter-spacing: 0.02em;
    text-transform: uppercase;
  `,
};

const Mono = {
  Default800: css`
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    ${FontSize[800]};
  `,
  Default700: css`
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    ${FontSize[700]};
  `,
  Default600: css`
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    ${FontSize[600]};
  `,
  Default500: css`
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    ${FontSize[500]};
  `,
  Default400: css`
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    ${FontSize[400]};
  `,
  Default300: css`
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    ${FontSize[300]};
  `,
  Default200: css`
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    ${FontSize[200]};
  `,
  Default100: css`
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    ${FontSize[100]};
  `,
};

const Marketing = {
  Default92: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 5.75rem;
    line-height: 7rem;
  `,
  Default68: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 4.25rem;
    line-height: 5.25rem;
  `,
  Default64: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 4rem;
    line-height: 5rem;
  `,
  Default60: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 3.75rem;
    line-height: 4.5rem;
  `,
  Default56: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 4.25rem;
  `,
  Default52: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 3.25rem;
    line-height: 4rem;
  `,
  Default48: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 3rem;
    line-height: 3.75rem;
  `,
  Default44: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 2.75rem;
    line-height: 3.25rem;
  `,
  Default40: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3rem;
  `,
  Default36: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.75rem;
  `,
  Default32: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
  `,
  Default28: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 2.25rem;
  `,
  Default24: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
  `,
  Default18: css`
    font-family: "Rubik";
    font-style: italic;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
  `,
  Straight92: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 5.75rem;
    line-height: 7rem;
  `,
  Straight64: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 4rem;
    line-height: 5rem;
  `,
  Straight60: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 3.75rem;
    line-height: 4.5rem;
  `,
  Straight56: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 3.5rem;
    line-height: 4.25rem;
  `,
  Straight52: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 3.25rem;
    line-height: 4rem;
  `,
  Straight48: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 3.75rem;
  `,
  Straight44: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 2.75rem;
    line-height: 3.25rem;
  `,
  Straight40: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3rem;
  `,
  Straight36: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.75rem;
  `,
  Straight32: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
  `,
  Straight28: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 2.25rem;
  `,
  Straight24: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
  `,
  Straight18: css`
    font-family: "Rubik";
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
  `,
};

export { Heading, Text, Underlined, Uppercase, Mono, Marketing };
