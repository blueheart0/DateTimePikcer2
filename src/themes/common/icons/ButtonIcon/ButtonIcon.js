import React from "react";

const ButtonIcon = props => (
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
        d="M21 8c.51 0 .935.388.993.884L22 9v6c0 .51-.388.935-.884.993L21 16H4c-.51 0-.935-.388-.993-.884L3 15V9c0-.51.388-.935.884-.993L4 8h17zm-1 2H5v4h15v-4z"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default ButtonIcon;
