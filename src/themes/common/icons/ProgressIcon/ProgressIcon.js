import React from "react";

const ProgressIcon = props => (
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
        d="M12.2 2c5.63 0 10.2 4.57 10.2 10.2 0 5.63-4.57 10.2-10.2 10.2C6.57 22.4 2 17.83 2 12.2 2 6.57 6.57 2 12.2 2zm0 2.04a8.158 8.158 0 0 0-8.16 8.16 8.158 8.158 0 0 0 8.16 8.16 8.158 8.158 0 0 0 8.16-8.16 8.158 8.158 0 0 0-8.16-8.16zm.753 2.625l5.867 5.866-5.5 5.5-1.76-1.76 2.667-2.667-7.856-.322-.08-2.302 7.81.133-2.798-2.798 1.65-1.65z"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default ProgressIcon;
