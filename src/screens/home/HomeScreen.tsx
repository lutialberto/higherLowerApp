import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenContainer from '~/components/containers/screenContainer/ScreenContainer';
import GenericText from '~/components/texts/genericText/GenericText';
import CountDownButton from './components/countDownButton/CountDownButton';
import SwipeDetectorContainer from '~/components/containers/swipeDetectorContainer/SwipeDetectorContainer';
import Option from './components/option/Option';
import {ItemToCompare} from './models/ItemToCompare';
import {getItemsToCompare} from '~/services/ItemsToCompareService';
import GenericButton from '~/components/buttons/genericButton/GenericButton';

const HomeScreen = () => {
  const [options, setOptions] = useState<ItemToCompare[]>([]);
  const [score, setScore] = useState(0);
  const [selectionPhase, setSelectionPhase] = useState<
    'countDown' | 'waitingForNextRound' | 'waitingToRestart'
  >('countDown');

  useEffect(() => {
    if (selectionPhase !== 'countDown') {
      getItemsToCompare().then(items => {
        setOptions(items);
      });
    }
  }, [selectionPhase]);

  const swapOptionPlaces = () => {
    const optionsReversed = [...options.reverse()];
    setOptions(optionsReversed);
  };

  const onOptionConfirmed = () => {
    const [first, second] = options;
    if (first.number > second.number) {
      setScore(score + 1);
      setSelectionPhase('waitingForNextRound');
    } else {
      onTimeOut();
    }
  };

  const onTimeOut = () => {
    setSelectionPhase('waitingToRestart');
    setScore(0);
  };

  return (
    <ScreenContainer>
      <GenericText>Mayor Menor</GenericText>
      <GenericText>Aciertos consecutivos: {score}</GenericText>
      <SwipeDetectorContainer
        style={styles.swiper}
        onPullUp={swapOptionPlaces}
        onPullDown={swapOptionPlaces}>
        <View style={styles.optionsContainer}>
          {options.map(option => (
            <Option key={option.title} title={option.title} />
          ))}
        </View>
      </SwipeDetectorContainer>
      {selectionPhase === 'countDown' ? (
        <CountDownButton seconds={25} onPress={onOptionConfirmed} onTimeOut={onTimeOut} />
      ) : (
        <GenericButton
          label={
            selectionPhase === 'waitingForNextRound'
              ? 'Empezar siguiente ronda'
              : 'Empezar nueva partida'
          }
          onPress={() => setSelectionPhase('countDown')}
        />
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  swiper: {
    flex: 1,
  },
  optionsContainer: {
    flex: 1,
  },
});
