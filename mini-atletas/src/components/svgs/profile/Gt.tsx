import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Gt = (props) => (
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
      d="m2.485 14.743 6.279-6.685-6.672-5.873"
    />
  </Svg>
)
export default Gt
