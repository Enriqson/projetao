import * as React from "react"
import Svg, { Rect } from "react-native-svg"

const Footer = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={341}
    height={73}
    fill="none"
    {...props}
  >
    <Rect width={340} height={65} x={1} y={8} fill="#5078CF" rx={32.5} />
    <Rect
      width={338}
      height={63}
      x={1}
      y={1}
      fill="#fff"
      stroke="#5078CF"
      strokeWidth={2}
      rx={31.5}
    />
  </Svg>
)
export default Footer
