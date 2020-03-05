import React from "react";

const RotateIcon = props => (
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
        d="M7.48 6.65L1 13.14l6.49 6.48 6.49-6.48-6.5-6.49zm-3.65 6.49l3.66-3.66 3.65 3.66-3.66 3.66-3.65-3.66zM19.5 6.88c-1.75-1.76-4.06-2.64-6.36-2.64V1L8.9 5.24l4.24 4.24V6.24c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9-1.37 1.37-3.16 2.05-4.95 2.05-.97 0-1.94-.21-2.84-.61l-1.49 1.49c1.35.74 2.84 1.12 4.33 1.12 2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"
      />
      <path d="M0 0H24V24H0z" />
    </g>
  </svg>
);
export default RotateIcon;
