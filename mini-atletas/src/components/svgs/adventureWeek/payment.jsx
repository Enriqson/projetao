import * as React from "react"
const Payment = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#8FBFFA"
      d="M15 32c8.617 0 14.77-3.054 14.77-9.847 0-7.387-3.691-11.129-11.079-14.823l3.196-4.992A1.597 1.597 0 0 0 20.509 0h-10.44a1.6 1.6 0 0 0-1.378 2.462l2.615 4.868C3.921 11.074.227 14.816.227 22.201.227 28.946 6.383 32 15 32Z"
    />
    <path
      fill="#2859C5"
      fillRule="evenodd"
      d="M8.472 8.882a10.49 10.49 0 0 0 13.068-.009 45.336 45.336 0 0 0-2.828-1.531 7.643 7.643 0 0 1-7.426 0 46.3 46.3 0 0 0-2.812 1.54h-.002Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Payment
