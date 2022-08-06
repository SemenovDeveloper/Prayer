import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import colors from 'src/styles/colors';

interface ICustomInput {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  onBlur: () => void;
}

export const CustomInput: React.FC<ICustomInput> = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    color: colors.lightestGray,
    paddingHorizontal: 12,
    fontSize: 17,
    lineHeight: 20,
    fontFamily: 'SFUIText-Regular',
  },
});
