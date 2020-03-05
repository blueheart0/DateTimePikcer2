import React from "react";

const ComplaintIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M11 18v-2H4V3.78h12V11h2V4c0-1.05-.82-1.918-1.851-1.994L16 2H4c-1.05 0-1.918.82-1.994 1.851L2 4v12c0 1.05.82 1.918 1.851 1.994L4 18h7zm3-10V6H6v2h8zm0 3V9H6v2h8zm-8 3h5.802a6.027 6.027 0 0 1 1.88-2.001L6 12v2zm11 8c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-1c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-1l3-3-3-3-.705.705 1.79 1.795H14v1h4.085l-1.79 1.795L17 20z"
      />
    </g>
  </svg>
);
export default ComplaintIcon;
