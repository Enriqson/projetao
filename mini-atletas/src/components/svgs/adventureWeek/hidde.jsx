import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HiddeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8FBFFA"
      strokeLinecap="round"
      strokeWidth={4}
      d="m2.1 2.31 7.801 8.195 7.695-7.813"
    />
  </Svg>
)
export default HiddeIcon
