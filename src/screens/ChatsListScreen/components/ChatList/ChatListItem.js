// @flow

import React, {Component} from 'react';
import {Text, TextInput, StyleSheet, View, Button} from 'react-native';


const ChatListItem = ({
                        userName,
                        messageText,
                        messageTime
                      }:{userName: string, messageText: string, messageTime: string}) => {
  return (
    <View style={styles.ChatListItem}>
      <View style={styles.UserImage}/>
      <View>
        <Text style={styles.BoldText}>{userName}</Text>
        <Text>{messageText}</Text>
      </View>
      <Text style={styles.Time}>{messageTime}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  UserImage: {
    borderRadius: 50,
    width: 54,
    height: 54,
    borderWidth: 1,
    marginRight: 20,
    borderColor: '#0000d0'
  },

  BoldText: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 18,
  },

  ChatListItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 10
  },

  Time: {
    position: 'absolute',
    color: '#909090',
    fontSize: 12,
    top: 15,
    right: 15
  }
});

export default ChatListItem;
