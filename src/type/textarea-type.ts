export type Sizes = "SMALL" | "MEDIUM" | "LARGE";

export interface TextareaProps {
  size?: Sizes;
  label?: string;
  placeholder?: string;
}
