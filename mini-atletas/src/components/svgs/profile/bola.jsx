import React from 'react';
import Svg, { ClipPath, Circle } from "react-native-svg";
import Girl from './girl'; // Importando o componente Girl

const Bola = ({ children, borderColor }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={178}
    height={148}
    fill="none"
  >
    <Circle cx={74} cy={78} r={65} stroke={borderColor} strokeWidth={4} />
    
    <Svg clipPath="url(#clip)" width={148} height={142}>
      {children}
    </Svg>

    <ClipPath id="clip">
      <Circle cx={74} cy={75.5} r={66} />
    </ClipPath>
  </Svg>
);

export default Bola;

