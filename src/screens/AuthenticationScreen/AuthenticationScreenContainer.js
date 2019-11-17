// @flow

import React, {Component} from 'react';
import {NavigationState, NavigationScreenProp} from 'react-navigation';
import AuthenticationScreen from "./AuthenticationScreen";
import {connect} from 'react-redux';
import {authenticate} from "../../actions/authenticate";
import ChatsListScreen from "../ChatsListScreen";

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
  isAuthenticationFailed: boolean,
  isLoading: boolean,
  isAuthenticationSucceed: boolean,
  authenticate: (phone: string, number: string) => void,
};

type State = {
  phoneNumber: string,
  password: string,
}

class AuthenticationScreenContainer extends Component<Props, State> {
  state = {
    phoneNumber: '',
    password: '',
  };

  handleAuthenticationInputChange = (name: string) => (
    event: SyntheticEvent<HTMLInputElement>,
  ): void => {
    const value = event.nativeEvent.text;

    this.setState({
      [name]: value
    });
  };

  handleAuthenticationSubmit = () => {
    const {phoneNumber, password} = this.state;
    const {authenticate} = this.props;

    authenticate(phoneNumber, password);

    if (phoneNumber.length > 3 && password.length > 3) this.handleNavigation()
  };

  handleNavigation = () => {
    const {navigate} = this.props.navigation;
    // console.log('navigate')
    navigate('ChatsListScreen')
  };

  render() {
    const {isLoading, isAuthenticationFailed} = this.props;
    return (
      <AuthenticationScreen
        onAuthenticationInputChange={this.handleAuthenticationInputChange}
        onAuthenticationSubmit={this.handleAuthenticationSubmit}
        isLoading={isLoading}
        isAuthenticationFailed={isAuthenticationFailed}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.authenticationReducer.isLoading,
    isAuthenticationFailed: state.authenticationReducer.requestStatus === 'failure',
    isAuthenticationSucceed: state.authenticationReducer.requestStatus === 'success',
  }
};

const mapDispatchToProps = {
  authenticate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationScreenContainer)
