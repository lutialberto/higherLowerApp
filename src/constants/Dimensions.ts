import {Dimensions} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;

export const vw = entireScreenWidth * 0.01;
export const vh = entireScreenHeight * 0.01;
