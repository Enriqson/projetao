import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProgressBar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={254}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8FBFFA"
      strokeWidth={3}
      d="M1.5 9A7.5 7.5 0 0 1 9 1.5h236a7.5 7.5 0 0 1 0 15H9A7.5 7.5 0 0 1 1.5 9Z"
    />
    <Path
      fill="#2859C5"
      d="M0 9a9 9 0 0 1 9-9h84a9 9 0 1 1 0 18H9a9 9 0 0 1-9-9Z"
    />
  </Svg>
)
export default ProgressBar
