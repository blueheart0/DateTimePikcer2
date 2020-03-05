import React from "react";

const FoldIcon = props => (
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
        fillRule="nonzero"
        d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2zm-2 11.41L13.59 17 15 15.59 11.41 12 15 8.41 13.59 7 10 10.59 8.59 12 10 13.41z"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default FoldIcon;
