import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChatHeader = ({chatName}) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.UserName}>{chatName}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  Header: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#b3b3b3',
    marginBottom: 20,
    alignItems: 'center'
  },

  UserName: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default ChatHeader;
