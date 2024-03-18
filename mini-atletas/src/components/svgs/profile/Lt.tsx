import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Lt = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={26}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8FBFFA"
      strokeLinecap="round"
      strokeWidth={3}
      d="M9.485 2.08 3 8.566l6.485 6.08"
    />
  </Svg>
)
export default Lt
