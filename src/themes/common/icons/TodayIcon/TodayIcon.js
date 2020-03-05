import React from "react";

const TodayIcon = props => (
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
        d="M8 2v2h8V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2zm2.998 7.276h-6.18v1.164h2.364v7.068h1.476V10.44h2.34V9.276zm4.02 0h-2.7v8.232h2.712c2.64 0 3.924-1.452 3.924-4.092v-.24c0-2.688-1.416-3.9-3.936-3.9zm-.084 1.164c1.56 0 2.46.648 2.46 2.724v.396c0 1.992-.744 2.784-2.352 2.784h-1.248V10.44h1.14z"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);
export default TodayIcon;
