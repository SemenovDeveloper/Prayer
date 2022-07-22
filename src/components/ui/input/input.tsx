import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {FieldError} from 'react-hook-form';

interface IInput {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error: FieldError | undefined;
  isSequre?: boolean;
}

export const Input: React.FC<IInput> = ({
  placeholder,
  onChange,
  value,
  error,
  isSequre,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        secureTextEntry={isSequre}
        autoCapitalize="none"
        style={styles.input}
      />
      <View style={styles.errorContainer}>{error && <Text style={styles.errorText}>{error.message}</Text>}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 50,
    paddingLeft: 14,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 10,
    // fontFamily: 'SFUIText-Regular',
    fontSize: 17,
    color: '#9C9C9C',
  },
  errorContainer: {
    height: 16,
  },
  errorText: {
    paddingLeft: 10,
    color: '#AC5253',
    // fontFamily: 'SFUIText-Regular',
    fontSize: 14,
    lineHeight: 16,
  },
});
