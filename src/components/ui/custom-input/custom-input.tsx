import {StyleSheet, TextInput} from 'react-native';
import React, {useEffect} from 'react';
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
  const input = React.useRef<TextInput>(null);

  useEffect(() => {
    if (!isDisable) {
      if (input.current) {
        input.current.focus();
      }
    }
  }, [isDisable]);

  return (
    <TextInput
      editable={isDisable ? false : true}
      style={isDisable ? styles.disabledInput : styles.input}
      placeholder={placeholder}
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      autoFocus
      ref={input}
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
