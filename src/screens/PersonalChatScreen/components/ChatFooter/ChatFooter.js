import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';
const ChatFooter = ({onMessageInput, messageText, onMessageSend}) => {
  return (
    <View style={styles.Footer}>
      <TouchableOpacity>
        <Text>Add</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.MessageInput}
        value={messageText}
        multiline={true}
        onChangeText={(value) => onMessageInput(value)}
        placeHolder={'Message'}
      />
      <TouchableOpacity onPress={onMessageSend} style={{width: 24, height: 24}}>
        <Image
          source={require("../../assets/paper-plane.png")}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  Footer: {
    flexDirection: 'row',
    paddingRight: 20,
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'space-between'
  },

  MessageInput: {
    backgroundColor: '#eeeeee',
    borderColor: '#af6ba5',
    width: '75%',
    borderRadius: 8,
    padding: 10,
    fontSize: 16
  }
});

export default ChatFooter;
