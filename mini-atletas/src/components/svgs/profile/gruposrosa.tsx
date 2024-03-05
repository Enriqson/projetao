import * as React from "react"
import Svg, { Path } from "react-native-svg"
const GrupoRosa = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={197}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFB7F2"
      stroke="#F203C8"
      strokeWidth={2}
      d="M1 35C1 20.64 12.64 9 27 9h98c14.359 0 26 11.64 26 26v135c0 14.359-11.641 26-26 26H27c-14.36 0-26-11.641-26-26V35Z"
    />
    <Path
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
      d="M10 27C10 12.64 21.64 1 36 1h98c14.359 0 26 11.64 26 26v135c0 14.359-11.641 26-26 26H36c-14.36 0-26-11.641-26-26V27Z"
    />
    <Path
      fill="#F203C8"
      d="M62 115.697a38.89 38.89 0 0 0-22.816 7.387 38.465 38.465 0 0 0-14.051 19.323 2.737 2.737 0 0 0 .399 2.462A2.773 2.773 0 0 0 27.769 146h68.462a2.773 2.773 0 0 0 2.238-1.131 2.742 2.742 0 0 0 .398-2.462 38.463 38.463 0 0 0-14.05-19.326A38.896 38.896 0 0 0 62 115.691v.006Z"
    />
  </Svg>
)
export default GrupoRosa
