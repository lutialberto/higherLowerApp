import {StyleProp, ViewStyle} from 'react-native/types';

export interface IScreenContainerProps {
  children: JSX.Element | JSX.Element[];
  containerStyle?: StyleProp<ViewStyle>;
  barStyle?: 'dark-content' | 'light-content';
  statusBarBackgroundColor?: string;
}
