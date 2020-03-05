import React from "react";

const KeyIcon = props => (
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
        d="M15 17l-5-5 5-5z"
        opacity=".87"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default KeyIcon;
