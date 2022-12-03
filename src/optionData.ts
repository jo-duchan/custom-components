import { States } from "type/button-type";

type OptionList = {
  id: number;
  label: string;
  state: States;
  fixed: boolean;
  type: "STATES" | "FIXEDWIDTH";
}[];

const optionList: OptionList = [
  {
    id: 0,
    label: "Default",
    state: "DEFAULT",
    fixed: false,
    type: "STATES",
  },
  {
    id: 1,
    label: "Disabled",
    state: "DISABLED",
    fixed: false,
    type: "STATES",
  },
  {
    id: 2,
    label: "Focused",
    state: "FOCUSED",
    fixed: false,
    type: "STATES",
  },
  {
    id: 3,
    label: "Loading",
    state: "LOADING",
    fixed: false,
    type: "STATES",
  },
  {
    id: 4,
    label: "FixedWidth",
    state: "DEFAULT",
    fixed: true,
    type: "FIXEDWIDTH",
  },
];

export default optionList;
