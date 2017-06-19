import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from 'native-base';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ""
    };
  }

  render(){
    return (
      <Container>
        <View>
          <Text> Hello world </Text>
        </View>
      </Container>
    );
  }
}

export default Login;
