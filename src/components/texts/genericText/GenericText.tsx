import {StyleSheet} from 'react-native';
import React from 'react';
import {useColors} from '~/hooks/colors/useColors';
import {Colors} from '~/hooks/colors/Models';
import FwkGenericText from './FwkGenericText';
import {IGenericTextProps} from './IGenericTextProps';

const GenericText = (props: IGenericTextProps) => {
  const {colors} = useColors();
  const styles = getStyles(colors);

  return <FwkGenericText {...props} style={[styles.text, props.style]} />;
};

export default GenericText;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    text: {
      color: colors.font,
      fontFamily: 'Arial',
      fontSize: 16,
    },
  });
};
