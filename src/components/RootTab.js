import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
import ContactsScreen from "../screens/ContactsScreen";
import ChatsListScreen from "../screens/ChatsListScreen";
import AuthenticationScreen from "../screens/AuthenticationScreen";
import ProfileScreen from "../screens/ProfileScreen";

const RootTab = createBottomTabNavigator(
  {
    ContactsScreen: {
      screen: ContactsScreen,
      navigationOptions: () => ({
        tabBarIcon: () => <Image source={require('../img/contacts.png')}/>,
        title: 'Contacts',
      }),
      tabBarOptions: {
        activeTintColor: '#d6cae7',
        tabStyle: {paddingTop: 10}
      }
    },

    ChatsListScreen: {
      screen: ChatsListScreen,
      navigationOptions: () => ({
        tabBarIcon: () => <Image source={require('../img/chat.png')}/>,
        title: 'Chats',
      }),
      tabBarOptions: {
        activeBackgroundColor: '#d6cae7',
        tabStyle: {paddingTop: 10}
      }
    },
    AuthenticationScreen: {
      screen: AuthenticationScreen,
      navigationOptions: () => ({
        tabBarIcon: () => <Image source={require('../img/chat.png')}/>,
        title: 'Chats',
      }),
      tabBarOptions: {
        activeBackgroundColor: '#d6cae7',
        tabStyle: {paddingTop: 10}
      }
    },

    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        tabBarIcon: () => <Image source={require('../img/user.png')}/>,
        title: 'Profile',
      }),
      tabBarOptions: {
        activeTintColor: '#d6cae7',
        tabStyle: {paddingTop: 10}
      }
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#d9cae7',
    },
  },
);

export default RootTab;

