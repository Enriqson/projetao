import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        {...props}
    >
        <G data-name="01 align center">
            <Path
                fill="#2859C5"
                d="M2 21V3a1 1 0 0 1 1-1h5V0H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h5v-2H3a1 1 0 0 1-1-1Z" />
            <Path
                fill="#2859C5"
                d="m23.123 9.879-4.586-4.586-1.414 1.414 4.264 4.264L5 11v2l16.443-.029-4.322 4.322 1.414 1.414 4.586-4.586a3 3 0 0 0 .002-4.242Z" />
        </G>
    </Svg>
)
export default SvgComponent
