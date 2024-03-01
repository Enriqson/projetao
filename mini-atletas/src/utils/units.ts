import { Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function VH(percentage: number) {
    return (percentage / 100) * screenHeight;
};

function VW (percentage: number) {
  return (percentage / 100) * screenWidth;
};

export default { VH, VW };