import {Navigation} from 'src/navigations';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from 'src/store';

const App = () => {
  return (
    // <Provider store={store}>
      <Navigation />
    // </Provider>r
  );
};

const styles = StyleSheet.create({});

export default App;
