import {TouchableOpacity} from 'react-native';
import React from 'react';
import {IGenericButtonProps} from './IGenericButtonProps';
import FwkGenericText from '~/components/texts/genericText/FwkGenericText';

const FwkGenericButton = ({
  enabled = true,
  onPress,
  label = '',
  icon = <></>,
  containerStyle,
  labelStyle,
  labelComponent,
}: IGenericButtonProps) => {
  return (
    <TouchableOpacity
      onPress={enabled ? onPress : () => {}}
      style={containerStyle}
      disabled={!enabled}>
      <>
        {icon}
        {labelComponent ?? <FwkGenericText children={label} style={labelStyle} />}
      </>
    </TouchableOpacity>
  );
};

export default FwkGenericButton;
