import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {FieldError} from 'react-hook-form';

interface IInput {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error: FieldError | undefined;
  isSequre?: boolean
}

export const Input: React.FC<IInput> = ({
  placeholder,
  onChange,
  value,
  error,
  isSequre
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        secureTextEntry={isSequre}
        autoCapitalize="none"
      />
      <View>{error && <Text>{error.message}</Text>}</View>
    </View>
  );
};

const styles = StyleSheet.create({})