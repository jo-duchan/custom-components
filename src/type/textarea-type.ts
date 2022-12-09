export type States =
  | "DEFAULT"
  | "HOVERED"
  | "PRESSED"
  | "FOCUSED"
  | "LOADING"
  | "DISABLED"
  | "SKELETON";

export type Sizes = "SMALL" | "MEDIUM" | "LARGE";

export interface TextareaProps {
  states?: States;
  size?: Sizes;
  label?: string;
  placeholder?: string;
}
