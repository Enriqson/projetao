import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TouchableOpacity } from 'react-native';
import { Pressable } from "react-native";
const SetaDireita = (props) => (
    
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2859C5"
      strokeLinecap="round"
      strokeWidth={4}
      d="m2.485 17.743 7.746-8.246L2 2.25"
    />
  </Svg>
)
export default SetaDireita
