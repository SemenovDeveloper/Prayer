import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './src/navigations/navigation';

const App = () => {
  return (
    // <SafeAreaView>
    //   <Text>Hello, world!</Text>
    // </SafeAreaView>
    <>
     <Navigation /> 
    </>
  )
}

const styles = StyleSheet.create({

})

export default App;