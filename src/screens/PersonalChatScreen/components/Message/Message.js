import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Message = ({author, text, time, userName, sender}) => {
  const getMessageStyles = userName !== sender ?  styles.MessageBox: [styles.MessageBox, styles.MessageBoxUser];
  const getTimeStyles = userName !== sender ?  styles.Time: [styles.Time, styles.TimeUser];
  const getTextStyles = userName !== sender ?  styles.Text: [styles.Text, styles.TextUser];

  return (
    <View style={getMessageStyles}>
      <View style={getTextStyles}><Text>{text}</Text></View>
      <Text style={getTimeStyles}>{time}</Text>
      <Text>{author}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  MessageBox: {
    marginBottom: 4,
    padding: 10,
    maxWidth: '65%',
    flexDirection: 'row',
  },

  MessageBoxUser: {
    marginLeft: 'auto',
    flexDirection: 'row-reverse',
  },

  Text: {
    backgroundColor: '#ffe5d5',
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 8,
  },

  TextUser: {
    backgroundColor: '#d9cae7',
  },

  Time: {
    alignSelf: 'flex-end',
    marginLeft: 10
  },

  TimeUser: {
    alignSelf: 'flex-end',
    marginRight: 10
  }
});

export default Message;
