import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const ExcitedSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <G fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        fill={props.color_primary ? props.color_primary : "#8FBFFA"}
        d="M26 0a26 26 0 1 1 0 52 26 26 0 0 1 0-52Z"
      />
      <Path
        fill={props.color_secondary ? props.color_secondary : "#2859C5"}
        d="M16.77 11.433a2.322 2.322 0 0 1 2.322 2.321v1.828h1.82a2.321 2.321 0 1 1 0 4.642h-1.82v1.82a2.321 2.321 0 1 1-4.643 0v-1.82H12.62a2.32 2.32 0 1 1 0-4.643h1.828v-1.827a2.322 2.322 0 0 1 2.321-2.321Zm18.46 0a2.32 2.32 0 0 0-2.321 2.325v1.824h-1.82a2.321 2.321 0 1 0 0 4.642h1.82v1.82a2.321 2.321 0 1 0 4.642 0v-1.82h1.828a2.32 2.32 0 1 0 0-4.643H37.55v-1.823a2.321 2.321 0 0 0-2.32-2.322v-.003Zm3.365 17.42a1.857 1.857 0 0 1 1.857 1.857c0 2.303-1.103 5.434-3.402 7.986-2.358 2.626-6.002 4.665-11.05 4.665-5.051 0-8.691-2.043-11.05-4.662-2.3-2.555-3.402-5.683-3.402-7.99a1.857 1.857 0 0 1 1.857-1.856h25.19Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h52v52H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ExcitedSvg;
