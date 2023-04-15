import {Dimensions} from 'react-native';

export const useSwipeDetector = (
  onPullUp: () => void,
  onPullDown: () => void,
  rangeOffset: number,
) => {
  let firstTouch = 0;

  // set user touch start position
  function onTouchStart(e: any) {
    firstTouch = e.nativeEvent.pageY;
  }

  // when touch ends check for swipe directions
  function onTouchEnd(e: any) {
    // get touch position and screen size
    const positionY = e.nativeEvent.pageY;
    const range = Dimensions.get('window').height / rangeOffset;

    // check if position is growing positively and has reached specified range
    if (positionY - firstTouch > range) {
      onPullDown();
    }
    // check if position is growing negatively and has reached specified range
    else if (firstTouch - positionY > range) {
      onPullUp();
    }
  }

  return {onTouchStart, onTouchEnd};
};
