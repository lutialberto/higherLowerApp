import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenContainer from '~/components/containers/screenContainer/ScreenContainer';
import GenericText from '~/components/texts/genericText/GenericText';

const HomeScreen = () => {
  return (
    <ScreenContainer>
      <GenericText>HomeScreen</GenericText>
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
