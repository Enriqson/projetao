import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Casa = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={38}
        height={36}
        fill="none"
        {...props}
    >
        <Path
            fill="#8FBFFA"
            d="M5.395 32.571V16.285L18.967 2.714l13.571 13.571v16.286a2.712 2.712 0 0 1-2.714 2.714H8.109a2.714 2.714 0 0 1-2.714-2.714Z"
        />
        <Path
            fill="#2859C5"
            fillRule="evenodd"
            d="M17.048.795a2.715 2.715 0 0 1 3.838 0L37.17 17.08a2.714 2.714 0 0 1-3.838 3.838L18.967 6.552 4.6 20.918A2.714 2.714 0 0 1 .762 17.08L17.048.795Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default Casa
