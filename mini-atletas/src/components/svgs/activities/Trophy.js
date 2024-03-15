import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Trophy = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <Path
            fill={props.color_primary}
            //fillRule="evenodd"
            d="M1.112 0A1.112 1.112 0 0 0 0 1.112v4.109a5.562 5.562 0 0 0 5.562 5.562h.571a1.112 1.112 0 0 0 1.113-1.112V1.112A1.112 1.112 0 0 0 6.133 0h-5.02Zm1.113 5.22V2.226H5.02v6.289A3.337 3.337 0 0 1 2.225 5.22ZM19.653 0a1.112 1.112 0 0 1 1.112 1.112v4.109a5.56 5.56 0 0 1-5.562 5.562h-.571a1.113 1.113 0 0 1-1.112-1.112V1.112A1.112 1.112 0 0 1 14.632 0h5.02ZM18.54 5.22V2.226h-2.796v6.289A3.337 3.337 0 0 0 18.54 5.22Zm-8.157 7.616a1.113 1.113 0 0 1 1.112 1.112v4.592h3.879a1.113 1.113 0 0 1 0 2.225H5.39a1.112 1.112 0 0 1 0-2.225h3.88v-4.592a1.112 1.112 0 0 1 1.113-1.112Z"
            clipRule="evenodd"
        />
        <Path
            fill={props.color_secondary}
            // fillRule="evenodd"
            d="M5.191.003a.742.742 0 0 0-.741.742v8.154a5.933 5.933 0 1 0 11.865 0V.745a.742.742 0 0 0-.741-.742H5.19Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Trophy
