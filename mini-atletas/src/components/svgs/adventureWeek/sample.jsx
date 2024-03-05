import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SampleIcon = (props) => (
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
      d="m17.5 11.5-8-8-7.5 8"
    />
  </Svg>
)
export default SampleIcon
