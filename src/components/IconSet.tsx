import React from "react";

// Type
import { IconType } from "type/icon-type";

interface Props {
  type: IconType;
}

function IconSet({ type }: Props) {
  switch (type) {
    case "PROGRESS": {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 4.80002C8.02354 4.80002 4.79999 8.02357 4.79999 12C4.79999 15.9765 8.02354 19.2 12 19.2C12.6627 19.2 13.2 19.7373 13.2 20.4C13.2 21.0628 12.6627 21.6 12 21.6C6.69806 21.6 2.39999 17.302 2.39999 12C2.39999 6.69809 6.69806 2.40002 12 2.40002C17.3019 2.40002 21.6 6.69809 21.6 12C21.6 12.6628 21.0627 13.2 20.4 13.2C19.7373 13.2 19.2 12.6628 19.2 12C19.2 8.02357 15.9764 4.80002 12 4.80002Z"
            fill="white"
          />
        </svg>
      );
    }
    default: {
      return <></>;
    }
  }
}

export default React.memo(IconSet);
