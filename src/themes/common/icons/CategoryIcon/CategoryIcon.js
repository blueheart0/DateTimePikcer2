import React from "react";

const CategoryIcon = props => (
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
        d="M19 5v4h-4V5h4M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4M21 3h-8v8h8V3zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default CategoryIcon;
