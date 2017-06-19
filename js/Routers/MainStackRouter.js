import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../components/login/';

export default ( StackNav = StackNavigator({
  Login: { screen: Login }
}));
