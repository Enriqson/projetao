import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const Taça = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="none"
        {...props}
    >
        <G fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
            <Path
                fill="#2859C5"
                d="M1.821 0A1.821 1.821 0 0 0 0 1.821V8.55a9.107 9.107 0 0 0 9.107 9.107h.935a1.821 1.821 0 0 0 1.822-1.822V1.821A1.821 1.821 0 0 0 10.042 0h-8.22Zm1.822 8.549V3.643H8.22V13.94a5.464 5.464 0 0 1-4.578-5.391ZM32.179 0A1.821 1.821 0 0 1 34 1.821V8.55a9.108 9.108 0 0 1-9.107 9.107h-.935a1.821 1.821 0 0 1-1.822-1.822V1.821A1.821 1.821 0 0 1 23.958 0h8.22Zm-1.822 8.549V3.643H25.78V13.94a5.465 5.465 0 0 0 4.578-5.391ZM17 21.017a1.821 1.821 0 0 1 1.821 1.821v7.52h6.351a1.821 1.821 0 1 1 0 3.642h-8.109a1.897 1.897 0 0 1-.126 0H8.825a1.821 1.821 0 0 1 0-3.643h6.354v-7.519A1.821 1.821 0 0 1 17 21.017Z"
            />
            <Path
                fill="#8FBFFA"
                d="M8.5.005a1.214 1.214 0 0 0-1.214 1.214v13.353a9.713 9.713 0 1 0 19.428 0V1.219A1.214 1.214 0 0 0 25.5.005h-17Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h34v34H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Taça
