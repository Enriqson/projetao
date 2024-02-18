import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      fill="#2859C5"
      d="M18.131 23.039A18.973 18.973 0 0 0 .065 36.217a1.357 1.357 0 0 0 1.292 1.772h33.549a1.357 1.357 0 0 0 1.292-1.772 18.974 18.974 0 0 0-18.067-13.18v.002Z"
    />
    <Path
      fill="#8FBFFA"
      d="M18.131 0a12.839 12.839 0 1 0 0 25.677 12.839 12.839 0 0 0 0-25.677Z"
    />
    <Ellipse cx={13.5} cy={11} fill="#2859C5" rx={1.5} ry={3} />
    <Ellipse cx={21.5} cy={11} fill="#2859C5" rx={1.5} ry={3} />
  </Svg>
)
export default SvgComponent
