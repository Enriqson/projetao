import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Esconde = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={82}
    height={82}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFCC4D"
      fillRule="evenodd"
      d="M59.861 55.042a8.784 8.784 0 1 0 0 17.568 8.784 8.784 0 0 0 0-17.568Zm-14.816-.662a17.569 17.569 0 1 1-2.758 9.528v-.017a2.835 2.835 0 0 0-.27-1.025.784.784 0 0 0-.245-.328c-.03-.018-.264-.176-.95-.176-.69 0-.919.158-.954.176a.784.784 0 0 0-.246.328c-.142.298-.231.62-.263.948v.012a17.569 17.569 0 1 1-2.753-9.452c1.26-.527 2.67-.796 4.217-.796 1.54 0 2.963.275 4.228.802h-.006ZM30.58 64.031a8.784 8.784 0 1 1 0-.422v.422Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FFE5A5"
      fillRule="evenodd"
      d="M14.734 7.133A8.532 8.532 0 0 1 23.155 0h35.348c4.17 0 7.73 3.016 8.42 7.133l4.17 25.04h6.172a4.392 4.392 0 1 1 0 8.785H4.392a4.392 4.392 0 1 1 0-8.785h6.172l4.17-25.04Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Esconde
