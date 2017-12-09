import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Components/Header';
import PratimuList from './src/Components/PratimuList';
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
      <Header headeris ={'Albumas'}/>
        <Text>Open up App.js to start working on your app!</Text>
        <PratimuList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
