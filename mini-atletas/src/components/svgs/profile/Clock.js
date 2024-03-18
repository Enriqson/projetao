import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Clock = ({ colorPrimary, colorSecondary, ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={26}
        fill="none"
        {...props}
    >
        <Path
            fill={colorSecondary}
            d="M1.824 14.858a11.143 11.143 0 1 0 22.286 0 11.143 11.143 0 0 0-22.286 0Z"
        />
        <Path
            fill={colorPrimary}
            fillRule="evenodd"
            d="M7.232.738a1.393 1.393 0 0 1-.576 1.885 14.746 14.746 0 0 0-4.242 3.393A1.393 1.393 0 0 1 .304 4.2 17.531 17.531 0 0 1 5.348.164 1.393 1.393 0 0 1 7.232.74V.738Zm11.47 0a1.39 1.39 0 0 1 1.885-.574A17.531 17.531 0 0 1 25.629 4.2a1.393 1.393 0 0 1-2.11 1.816 14.746 14.746 0 0 0-4.244-3.393 1.394 1.394 0 0 1-.573-1.885Zm-4.575 8.548a1.161 1.161 0 1 0-2.321 0v5.572c0 .64.52 1.16 1.16 1.16h4.644a1.16 1.16 0 1 0 0-2.321h-3.483v-4.41Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Clock
