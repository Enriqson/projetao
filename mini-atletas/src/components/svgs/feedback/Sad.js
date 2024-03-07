import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SadSvg = (props) => (
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
        d="M26 0a26 26 0 1 0 0 52 26 26 0 0 0 0-52Z"
      />
      <Path
        fill={props.color_secondary ? props.color_secondary : "#2859C5"}
        d="M17.034 14.586a3.806 3.806 0 0 1-.008 7.61h-.007a3.805 3.805 0 1 1 .007-7.61h.008Zm-4.316 26.798a2.322 2.322 0 0 0 2.845-1.638 10.82 10.82 0 0 1 20.889 0 2.321 2.321 0 0 0 4.483-1.207 15.462 15.462 0 0 0-29.855 0 2.321 2.321 0 0 0 1.638 2.845Zm22.256-26.798a3.808 3.808 0 0 0-1.493 7.356 3.807 3.807 0 1 0 1.493-7.356Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h52v52H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SadSvg;
