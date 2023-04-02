import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {IScreenContainerProps} from './IFwkScreenContainerProps';

const FwkScreenContainer = ({
  children,
  containerStyle,
  barStyle = 'light-content',
  statusBarBackgroundColor,
}: IScreenContainerProps) => {
  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle={barStyle} backgroundColor={statusBarBackgroundColor} />
      {children}
    </SafeAreaView>
  );
};

export default FwkScreenContainer;
