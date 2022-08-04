import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  deleteType?: boolean;
}

export const Button: React.FC<ButtonProps> = ({title, onPress, deleteType}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={deleteType ? styles.deleteBtnStyle : styles.defaultBtnStyle}>
      <Text style={deleteType ? styles.deleteText : styles.text}>{title}</Text>
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
    fontFamily: 'SFUIText-Regular',
    fontSize: 12,
    lineHeight: 14,
    color: 'white',
  },
  deleteBtnStyle: {
    width: '30%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC5253',
    marginBottom: 10,
  },
  deleteText: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 13,
    lineHeight: 15,
    color: 'white',
  },
});
