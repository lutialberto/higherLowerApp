import {StyleProp, ViewStyle} from 'react-native/types';

export interface ISwipeDetectorContainerProps {
  onPullUp: () => void;
  onPullDown: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
