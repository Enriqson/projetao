import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const HappyFace = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <G fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path fill="#8FBFFA" d="M26 0a26 26 0 1 0 0 52 26 26 0 0 0 0-52Z" />
      <Path
        fill="#2859C5"
        d="M17.011 22.197a3.807 3.807 0 0 1 .015-7.611h.019a3.807 3.807 0 0 1-.019 7.61h-.015Zm-3.666 7.417a.929.929 0 0 0-.928.929c0 2.05 1.003 4.966 3.16 7.365 2.192 2.437 5.59 4.357 10.364 4.357 4.772 0 8.171-1.92 10.362-4.357 2.158-2.4 3.158-5.311 3.158-7.365a.928.928 0 0 0-.929-.929H13.345Zm21.618-7.417a3.808 3.808 0 1 1 .01 0h-.01Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h52v52H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default HappyFace