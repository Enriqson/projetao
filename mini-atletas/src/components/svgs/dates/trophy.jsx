import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Trophy = ({ colorPrimary, colorSecondary, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <Path
      fill={colorSecondary} // Define a cor primária
      fillRule="evenodd"
      d="M4.103 2.735a1.368 1.368 0 0 0-1.368 1.368v5.051a6.838 6.838 0 0 0 6.839 6.838h.702a1.368 1.368 0 0 0 1.367-1.367V4.103a1.368 1.368 0 0 0-1.367-1.368H4.103Zm1.368 6.42V5.47h3.437v7.731A4.103 4.103 0 0 1 5.47 9.154Zm21.426-6.42a1.368 1.368 0 0 1 1.368 1.368v5.051a6.84 6.84 0 0 1-6.838 6.838h-.703a1.368 1.368 0 0 1-1.367-1.367V4.103a1.368 1.368 0 0 1 1.367-1.368h6.173Zm-1.368 6.42V5.47h-3.437v7.731a4.103 4.103 0 0 0 3.437-4.048ZM15.5 18.515a1.368 1.368 0 0 1 1.368 1.368v5.645h4.768a1.368 1.368 0 0 1 0 2.736h-6.089a1.498 1.498 0 0 1-.094 0H9.362a1.368 1.368 0 0 1 0-2.736h4.77v-5.645a1.368 1.368 0 0 1 1.368-1.368Z"
      clipRule="evenodd"
    />
    <Path
      fill={colorPrimary} // Define a cor secundária
      fillRule="evenodd"
      d="M9.118 2.74a.912.912 0 0 0-.912.911v10.026a7.294 7.294 0 1 0 14.588 0V3.65a.912.912 0 0 0-.912-.912H9.118Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Trophy;