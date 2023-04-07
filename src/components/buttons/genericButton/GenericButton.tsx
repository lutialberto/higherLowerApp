import {StyleSheet} from 'react-native';
import React from 'react';
import {IGenericButtonProps} from './IGenericButtonProps';
import {useColors} from '~/hooks/colors/useColors';
import FwkGenericButton from './FwkGenericButton';
import GenericText from '~/components/texts/genericText/GenericText';
import {Colors} from '~/hooks/colors/Models';
import {vw} from '~/constants/Dimensions';

const GenericButton = ({
  enabled = true,
  containerStyle,
  labelStyle,
  labelComponent,
  ...props
}: IGenericButtonProps) => {
  const {colors} = useColors();
  const styles = getStyles(colors);

  const getContainerStyle = () => {
    const containerStyles = {
      default: [
        styles.defaultContainer,
        containerStyle,
        !enabled && styles.defaultDisabledContainer,
      ],
    };

    return containerStyles['default'];
  };

  const getLabelStyle = () => {
    const labelStyles = {
      default: [styles.defaultLabel, labelStyle],
    };

    return labelStyles['default'];
  };

  return (
    <FwkGenericButton
      {...props}
      enabled={enabled}
      containerStyle={getContainerStyle()}
      labelStyle={getLabelStyle()}
      labelComponent={
        labelComponent ?? <GenericText children={props.label ?? ''} style={getLabelStyle()} />
      }
    />
  );
};

export default GenericButton;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    defaultContainer: {
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: vw * 10,
      paddingVertical: vw * 2,
      paddingHorizontal: vw * 3,
      flexDirection: 'row',
      marginHorizontal: vw * 25,
    },
    defaultDisabledContainer: {
      backgroundColor: colors.disabled,
    },
    defaultLabel: {
      marginLeft: vw,
      textAlign: 'center',
    },
  });
};
