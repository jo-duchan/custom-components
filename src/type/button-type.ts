export type BtnType = "PRIMARY" | "SECONDARY";

export type States =
  | "DEFAULT"
  | "HOVERED"
  | "PRESSED"
  | "FOCUSED"
  | "LOADING"
  | "DISABLED"
  | "SKELETON";

export type Sizes = "XSMALL" | "SMALL" | "MEDIUM" | "LARGE" | "XLARGE";

export interface ButtonProps {
  btnType?: BtnType;
  states?: States;
  size?: Sizes;
  fixedWidth?: boolean;
  label?: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
