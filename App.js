/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthenticationScreen from './src/screens/AuthenticationScreen';
import ChatsListScreen from "./src/screens/ChatsListScreen";
import PersonalChatScreen from "./src/screens/PersonalChatScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ContactsScreen from "./src/screens/ContactsScreen/ContactsScreen";
import RootTab from "./src/components/RootTab";

const RootStack = createStackNavigator(
  {
    AuthenticationScreen: AuthenticationScreen,
    ChatsListScreen: ChatsListScreen,
    PersonalChatScreen: PersonalChatScreen,
    ContactsScreen: ContactsScreen,
    ProfileScreen: ProfileScreen,
    RootTab: {
      screen: RootTab,
    },
  },
  {
    initialRouteName: 'AuthenticationScreen',
  },
);

const AppContainer = createAppContainer(RootStack);

const App: () => React$Node = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

export default App;
