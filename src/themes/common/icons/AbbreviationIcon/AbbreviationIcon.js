import React from "react";

const AbbreviationIcon = props => (
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
        d="M20 2c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6l-4 4 .01-18c0-1.1.89-2 1.99-2zM10 7H7l-.116.007A1.004 1.004 0 0 0 6 8v5h1.5v-1.5h2V13H11V8l-.007-.116A1.004 1.004 0 0 0 10 7zm5 2h-2v2h2V9zm4 0h-2v2h2V9zm-9.5-.5V10h-2V8.5h2z"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default AbbreviationIcon;
