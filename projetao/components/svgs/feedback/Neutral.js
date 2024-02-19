import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgComponent = (props) => (
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
        d="M13.223 18.393c0-2.099 1.694-3.8 3.789-3.807h.014a3.807 3.807 0 0 1 .015 7.61h-.015a3.807 3.807 0 0 1-3.803-3.803Zm21.75 3.803h.008a3.805 3.805 0 1 0-.007-7.61h-.011a3.807 3.807 0 0 0 .01 7.61Zm.135 10.118a2.321 2.321 0 0 1 0 4.643H16.893a2.322 2.322 0 0 1 0-4.643h18.215Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h52v52H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
