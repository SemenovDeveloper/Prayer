import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import colors from 'src/styles/colors';

interface ICustomInput {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  onBlur: () => void;
  isDisable?: boolean;
}

export const CustomInput: React.FC<ICustomInput> = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  isDisable,
}) => {
  return (
    <TextInput
      editable={isDisable ? false : true}
      style={isDisable ? styles.disabledInput : styles.input}
      placeholder={placeholder}
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: colors.white,
    color: colors.lightestGray,
    fontSize: 17,
    lineHeight: 20,
    fontFamily: 'SFUIText-Regular',
  },
  disabledInput: {
    color: colors.black,
  },
});
