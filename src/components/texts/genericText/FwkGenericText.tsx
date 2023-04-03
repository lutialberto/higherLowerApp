import {Text} from 'react-native';
import React from 'react';
import {IGenericTextProps} from './IGenericTextProps';

const FwkGenericText = (props: IGenericTextProps) => {
  return <Text {...props} />;
};

export default FwkGenericText;
