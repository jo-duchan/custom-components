export type States =
  | "DEFAULT"
  | "HOVERED"
  | "FOCUSED"
  | "DISABLED"
  | "ERROR"
  | "ERROR_FOCUSED";

export type Sizes = "SMALL" | "MEDIUM" | "LARGE";

export interface TextareaProps {
  states?: States;
  size?: Sizes;
  label?: string;
  placeholder?: string;
  errorText?: string;
}
