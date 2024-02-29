import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TouchableOpacity } from 'react-native';
import TrofeuAzul from "./trofeuazul";
import TrofeuVerde from "./trofeuverde";
import { Pressable } from "react-native";

const Conquista = (props) => (
  
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={352}
    height={81}
    fill="none"
    {...props}
  >
    <Path
      fill="#8FBFFA"
      stroke="#2859C5"
      strokeWidth={2}
      d="M1 36c0-14.36 11.64-26 26-26h289c14.359 0 26 11.64 26 26v18c0 14.36-11.641 26-26 26H27C12.64 80 1 68.36 1 54V36Z"
    />
    <Path
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
      d="M10 27C10 12.64 21.64 1 36 1h289c14.359 0 26 11.64 26 26v18c0 14.36-11.641 26-26 26H36c-14.36 0-26-11.64-26-26V27Z"
    />



    
  </Svg>

)
export default Conquista
