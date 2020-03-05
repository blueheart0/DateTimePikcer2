import React from "react";

const EraserIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0H24V24H0z" />
      <path
        fill="currentColor"
        d="M15.607 4.586l4.242 4.242c.781.781.781 2.048 0 2.829l-7.707 7.706 5.93.001v1l-10.73-.001-3.756-3.756c-.781-.781-.781-2.048 0-2.829l9.192-9.192c.781-.781 2.048-.781 2.829 0zm-8.132 8.131L5.212 14.98c-.29.29-.324.734-.093 1.03l.058.066 3.182 3.182c.271.272.714.278 1.026.027l.07-.062 2.262-2.264-4.242-4.242z"
      />
    </g>
  </svg>
);
export default EraserIcon;
