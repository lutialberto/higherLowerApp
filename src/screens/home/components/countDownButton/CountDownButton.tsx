import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import GenericButton from '~/components/buttons/genericButton/GenericButton';
import {ICountDownButtonProps} from './ICountDownButtonProps';

const CountDownButton = (props: ICountDownButtonProps) => {
  const [seconds, setSeconds] = useState(props.seconds);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(prev => prev - 1), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds <= 0) props.onTimeOut();
  }, [seconds]);

  const formatted = () => {
    if (seconds <= 0) return '';

    let formatedMinutes = '';
    if (seconds >= 60) {
      const minutes = Math.floor(seconds / 60);
      formatedMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;

      const formatedSeconds = `${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;

      return `${formatedMinutes}:${formatedSeconds}`;
    }

    return `${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return <GenericButton onPress={props.onPress} label={`Confirmar ${formatted()}`} />;
};

export default CountDownButton;

const styles = StyleSheet.create({});
