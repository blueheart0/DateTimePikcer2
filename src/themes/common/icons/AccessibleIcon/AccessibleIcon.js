import React from "react";

const AccessibleIcon = props => (
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
        d="M11.81 7.02c.44-.04.84.06 1.19.26h.01l.02.01c.23.11.44.26.61.45l1.29 1.43c.98 1.08 2.53 1.85 4.07 1.83v2c-1.75-.01-3.71-.88-5-1.95v3.45h3c1.1 0 2 .9 2 2V22h-2v-5h-5c-1.1 0-2-.9-2-2V9.09c0-1.05.76-1.98 1.81-2.07zM9 12.1v2.07c-1.16.42-2 1.52-2 2.83 0 1.66 1.34 3 3 3 1.31 0 2.42-.84 2.83-2h2.07A5 5 0 1 1 9 12.1zM12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default AccessibleIcon;
