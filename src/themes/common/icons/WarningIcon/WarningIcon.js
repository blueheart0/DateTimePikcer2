import React from "react";

const WarningIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="currentColor"
        d="M3.003 21.003h18.53c.77 0 1.25-.83.87-1.5l-9.27-16a.996.996 0 0 0-1.73 0l-9.27 16c-.38.67.1 1.5.87 1.5zm10.27-3h-2v-2h2v2zm-2-3.997v-4h2v4h-2z"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default WarningIcon;
