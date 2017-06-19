import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Content, Text, View } from 'native-base';
import MainStackRouter from './Routers/MainStackRouter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };
  render(){
    return <MainStackRouter />;
  };
}

export default App;
