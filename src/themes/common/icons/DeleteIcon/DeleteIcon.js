import React from "react";

const DeleteIcon = props => (
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
        d="M18 7v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V7h12zm-8 2H8v10h2V9zm3 0h-2v10h2V9zm3 0h-2v10h2V9zm-1.5-6l1 1H19v2H5V4h3.5l1-1h5z"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default DeleteIcon;
