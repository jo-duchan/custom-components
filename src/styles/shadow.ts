import { css } from "styled-components";

const CardShadow = {
  Card: css`
    box-shadow: 0px 0px 8px -4px rgba(20, 23, 26, 0.12),
      0px 4px 16px -1px rgba(20, 23, 26, 0.08);
  `,
  CardHovered: css`
    box-shadow: 0px 8px 18px -6px rgba(20, 23, 26, 0.12),
      0px 12px 42px -4px rgba(20, 23, 26, 0.12);
  `,
  BigCard: css`
    box-shadow: 0px 6px 20px -6px rgba(20, 23, 26, 0.12),
      0px 8px 32px -6px rgba(20, 23, 26, 0.08);
  `,
  BigCardHovered: css`
    box-shadow: 0px 8px 32px -6px rgba(20, 23, 26, 0.12),
      0px 12px 42px -4px rgba(20, 23, 26, 0.12);
  `,
};

const TopBarShadow = {
  Topbar: css`
    box-shadow: 0px 6px 8px -6px rgba(20, 23, 26, 0.06),
      0px 8px 16px -6px rgba(20, 23, 26, 0.04);
  `,
};

const DropDownShadow = {
  Dropdown: css`
    box-shadow: 0px 8px 18px -6px rgba(20, 23, 26, 0.12),
      0px 12px 42px -4px rgba(20, 23, 26, 0.12);
  `,
};

const OtherShadow = {
  XSmall: css`
    box-shadow: 0px 0px 60px rgba(26, 30, 35, 0.12),
      0px 2px 60px rgba(26, 30, 35, 0.08);
  `,
  Small: css`
    box-shadow: 0px 0px 8px rgba(20, 23, 26, 0.08),
      0px 0px 4px rgba(20, 23, 26, 0.04);
  `,
};

export { CardShadow, TopBarShadow, DropDownShadow, OtherShadow };
