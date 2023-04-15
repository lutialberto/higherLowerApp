import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ISwipeDetectorContainerProps} from './ISwipeDetectorContainerProps';
import {useSwipeDetector as useSwipeDetector} from '~/components/containers/swipeDetectorContainer/useSwipeDetector';

const SwipeDetectorContainer = ({
  onPullUp,
  onPullDown,
  children,
  style,
}: ISwipeDetectorContainerProps) => {
  const {onTouchStart, onTouchEnd} = useSwipeDetector(onPullUp, onPullDown, 10);
  return (
    <View onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={style}>
      {children}
    </View>
  );
};

export default SwipeDetectorContainer;

const styles = StyleSheet.create({});
