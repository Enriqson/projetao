import * as React from "react"
import Svg, { Path, Rect, G, Defs, ClipPath } from "react-native-svg"
const Ball = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={88}
    height={88}
    fill="none"
    {...props}
  >
    <Path
      fill="#8FBFFA"
      d="M42.046 2.228c-12.76.605-22.987 4.721-29.853 12.316-6.859 7.6-9.96 18.242-9.352 31.09.61 12.847 4.704 23.147 12.252 30.064 7.553 6.911 18.123 10.042 30.883 9.437 12.76-.605 22.987-4.721 29.852-12.316 6.86-7.6 9.961-18.242 9.352-31.09-.609-12.847-4.704-23.147-12.251-30.065-7.553-6.91-18.124-10.041-30.883-9.436Z"
    />
    <Path
      fill="#2859C5"
      fillRule="evenodd"
      d="M3.318 34.55c13.69.558 26.241-2.229 36.814-6.546A89.799 89.799 0 0 0 19.475 8.512a39.166 39.166 0 0 1 7.98-3.696 96.505 96.505 0 0 1 19.79 19.909c9.624-4.962 17.045-11.026 21.388-16.377a32.701 32.701 0 0 1 5.893 4.89C69.65 19.226 61.72 25.768 51.564 31.13a93.035 93.035 0 0 1 6.52 12.598c9.006-1.657 18.051-1.828 27.134-1.07a59.33 59.33 0 0 1-.222 7.691c-8.225-.711-16.259-.614-24.156.696 3.626 10.97 4.803 21.365 4.44 29.587a42.12 42.12 0 0 1-7.824 2.832 3.378 3.378 0 0 1 .017-.554c.76-7.81-.181-18.648-4.136-30.235-1.176.32-2.352.666-3.52 1.047-11.492 3.746-22.958 10.604-34.501 22.175a33.01 33.01 0 0 1-5.072-5.767C22.444 58 34.818 50.531 47.466 46.41a87.507 87.507 0 0 1 3.049-.925 86.542 86.542 0 0 0-5.897-11.046 95.69 95.69 0 0 1-41.853 7.776c.007-2.565.192-5.126.553-7.665Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Ball