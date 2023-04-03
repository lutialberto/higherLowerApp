import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native/types';

export interface IGenericTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}
