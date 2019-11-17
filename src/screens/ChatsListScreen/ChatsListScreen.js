// @flow

import React, {Component} from 'react';
import {View, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {NavigationState, NavigationScreenProp} from 'react-navigation';

import ChatListHeader from './components/ChatListHeader';
import ChatList from './components/ChatList';
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import ContactsScreen from '../ContactsScreen'


type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};

class ChatsListScreen extends Component<Props> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <ChatListHeader navigate={navigate}/>
        <View>
          <ChatList navigate={navigate}/>
        </View>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ContactsScreen: {
    screen: ContactsScreen,
    navigationOptions: () => ({
      tabBarIcon: () => <Image  source={require('../../img/contacts.png')} />,
      title: 'Contacts',
    }),
    tabBarOptions: {
      activeTintColor: '#d6cae7',
      tabStyle: {paddingTop: 10}
    }
  },

  Chats: {
      screen: ChatsListScreen,
      navigationOptions: () => ({
        tabBarIcon: () => <Image  source={require('../../img/chat.png')} />,
        title: 'Chats',
      }),
      tabBarOptions: {
        activeBackgroundColor: '#d6cae7',
        tabStyle: {paddingTop: 10}
      }
    },

  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      tabBarIcon: () => <Image  source={require('../../img/user.png')} />,
      title: 'Profile',
    }),
    tabBarOptions: {
      activeTintColor: '#d6cae7',
      tabStyle: {paddingTop: 10}
    }
  },
});

export default createAppContainer(TabNavigator);
