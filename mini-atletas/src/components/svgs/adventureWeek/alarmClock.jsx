import * as React from "react"
const AlarmClock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#8FBFFA" d="M2 16a12 12 0 1 0 24 0 12 12 0 0 0-24 0Z" />
      <path
        fill="#2859C5"
        fillRule="evenodd"
        d="M7.824.794a1.5 1.5 0 0 1-.62 2.03 15.88 15.88 0 0 0-4.568 3.654A1.5 1.5 0 0 1 .364 4.522 18.88 18.88 0 0 1 5.794.176a1.5 1.5 0 0 1 2.03.62V.794Zm12.352 0a1.5 1.5 0 0 1 2.03-.618 18.878 18.878 0 0 1 5.43 4.346 1.5 1.5 0 0 1-2.272 1.956 15.878 15.878 0 0 0-4.57-3.654 1.5 1.5 0 0 1-.618-2.03ZM15.25 10a1.25 1.25 0 1 0-2.5 0v6c0 .69.56 1.25 1.25 1.25h5a1.25 1.25 0 1 0 0-2.5h-3.75V10Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default AlarmClock
