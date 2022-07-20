import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';

interface IButton {
  onPress: () => void;
  title: string;
}

export const Button: React.FC<IButton> = ({onPress, title}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({});
