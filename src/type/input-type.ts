export type States =
  | "DEFAULT"
  | "HOVERED"
  | "FOCUSED"
  | "DISABLED"
  | "ERROR"
  | "ERROR_FOCUSED";

export interface InputProps {
  states?: States;
  width?: string;
  label?: string;
  placeholder?: string;
  errorText?: string;
}
