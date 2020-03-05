import React from "react";

const UndoIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0H24V24H0z" />
      <path
        fill="currentColor"
        d="M12.5 9c-2.65 0-5.05.99-6.9 2.6L2 8v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 12.03 17.15 9 12.5 9z"
      />
    </g>
  </svg>
);
export default UndoIcon;
