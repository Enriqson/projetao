import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { TouchableOpacity } from 'react-native';

const TrofeuRosa = (props) => (
    
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={41}
            height={41}
            fill="none"
            {...props}
        >
            <Path
            fill="#F203C8"
            fillRule="evenodd"
            d="M5.426 3.617a1.809 1.809 0 0 0-1.808 1.809v6.68a9.044 9.044 0 0 0 9.044 9.045h.928a1.81 1.81 0 0 0 1.81-1.81V5.427a1.809 1.809 0 0 0-1.81-1.809H5.427Zm1.81 8.49V7.235h4.545V17.46a5.426 5.426 0 0 1-4.546-5.354Zm28.338-8.49a1.809 1.809 0 0 1 1.808 1.809v6.68a9.044 9.044 0 0 1-9.044 9.045h-.928a1.809 1.809 0 0 1-1.81-1.81V5.427a1.809 1.809 0 0 1 1.81-1.809h8.164Zm-1.81 8.49V7.235H29.22V17.46a5.426 5.426 0 0 0 4.546-5.354ZM20.5 24.489a1.81 1.81 0 0 1 1.809 1.808v7.467h6.307a1.809 1.809 0 0 1 0 3.618h-8.053a1.873 1.873 0 0 1-.126 0h-8.055a1.809 1.809 0 0 1 0-3.618h6.31v-7.467A1.809 1.809 0 0 1 20.5 24.49Z"
            clipRule="evenodd"
            />
            <Path
            fill="#FFB7F2"
            fillRule="evenodd"
            d="M12.059 3.622a1.206 1.206 0 0 0-1.206 1.206v13.26a9.647 9.647 0 1 0 19.294 0V4.828a1.206 1.206 0 0 0-1.206-1.206H12.06Z"
            clipRule="evenodd"
            />
        </Svg>

)
export default TrofeuRosa
