import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IOptionProps} from './IOptionProps';
import GenericText from '~/components/texts/genericText/GenericText';

const Option = ({title}: IOptionProps) => {
  return (
    <View style={styles.option}>
      <GenericText>{title}</GenericText>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  option: {
    flex: 1,
    borderWidth: 1,
  },
});
