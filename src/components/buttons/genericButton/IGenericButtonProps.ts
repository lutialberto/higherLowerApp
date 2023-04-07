import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface IGenericButtonProps {
  onPress: () => void;
  label?: string;
  enabled?: boolean;
  icon?: Element;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  labelComponent?: Element;
}
