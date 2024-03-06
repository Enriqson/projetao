import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"
const Boy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={131}
    height={137}
    fill="none"
    {...props}
  >
    <Path
      fill="#2859C5"
      d="M65.5 83.085a68.62 68.62 0 0 0-40.391 13.143 68.426 68.426 0 0 0-24.874 34.38 4.888 4.888 0 0 0 2.445 5.86c.689.35 1.45.532 2.223.532h121.194a4.906 4.906 0 0 0 4.841-4.117 4.9 4.9 0 0 0-.173-2.275 68.43 68.43 0 0 0-24.872-34.386A68.617 68.617 0 0 0 65.5 83.075v.01Z"
    />
    <Path
      fill="#8FBFFA"
      d="M65.5 0a46.42 46.42 0 0 0-32.795 13.56A46.259 46.259 0 0 0 19.12 46.3a46.26 46.26 0 0 0 13.585 32.739A46.42 46.42 0 0 0 65.5 92.599a46.42 46.42 0 0 0 32.795-13.56 46.26 46.26 0 0 0 13.585-32.74 46.26 46.26 0 0 0-13.585-32.738A46.42 46.42 0 0 0 65.5 0Z"
    />
    <Ellipse cx={48.5} cy={45.5} fill="#2859C5" rx={6.5} ry={12.5} />
    <Ellipse cx={82} cy={45.5} fill="#2859C5" rx={6} ry={12.5} />
  </Svg>
)
export default Boy