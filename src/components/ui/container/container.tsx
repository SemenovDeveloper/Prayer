import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';

interface IContainer {
  children: ReactNode;
}

export const Container: React.FC<IContainer> = ({children}) => {
  return <View style={styles.default}>{children}</View>;
};

const styles = StyleSheet.create({
  default: {
    height: '100%',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
});
