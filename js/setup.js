import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleProvider } from 'native-base';
import App from './App'
import configureStore from './configureStore';

export default class setup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false})),
    };
  }

  render() {
    return (
      <StyleProvider>
        <Provider store={this.state.store}>
          <App />
        </Provider>
      </StyleProvider>
    );
  }
}

//function setup():React.Component{
//}

//export default setup;
