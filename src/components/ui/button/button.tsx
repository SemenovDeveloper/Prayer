import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

interface ButtonProps {
  onPress: () => void
  title: string;
}

export const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.defaultBtnStyle}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  defaultBtnStyle: {
    width: 209,
    height: 30,
    margin: 21,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BFB393',
    shadowColor: 'rgba(66, 78, 117, 0.1)',
  },
  text: {
    // fontFamily: 'SFUIText-Regular',
    fontSize: 12,
    lineHeight: 14,
    color: 'white',
  },
});
