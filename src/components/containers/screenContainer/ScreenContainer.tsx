import {StyleSheet} from 'react-native';
import React from 'react';
import {useColors} from '~/hooks/colors/useColors';
import FwkScreenContainer from './FwkScreenContainer';
import {Colors} from '~/hooks/colors/Models';
import {IScreenContainerProps} from './IFwkScreenContainerProps';

const ScreenContainer = ({children, containerStyle}: IScreenContainerProps) => {
  const {colors} = useColors();
  const styles = getStyles(colors);

  return (
    <FwkScreenContainer
      containerStyle={[styles.container, containerStyle]}
      children={children}
      barStyle={'light-content'}
      statusBarBackgroundColor={colors.background}
    />
  );
};

export default ScreenContainer;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
  });
};
