import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Seta = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2859C5"
      strokeLinecap="round"
      strokeWidth={4}
      d="m12.168 2.48-8.426 7.551 7.578 7.926"
    />
  </Svg>
)
export default Seta
