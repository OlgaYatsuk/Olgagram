import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import ProfileScreen from "../../../ProfileScreen/ProfileScreen";

const ChatListHeader = (props) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.HeaderTitle}>Chats</Text>
      <TouchableOpacity style={styles.EditProfile} onPress={()=>{props.navigate('ProfileScreen')}}>
        <Image
          source={require("../../assets/edit.png")}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  UserImage: {
    borderRadius: 50,
    width: 40,
    height: 40,
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 'auto',
    borderColor: '#af6ba5'
  },

  EditProfile: {
    marginLeft: 'auto'
  },

  Header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#b3b3b3',
    marginBottom: 20
  },

  HeaderTitle: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 'auto',
    textAlign: 'center',
    top: 15,
  }
});

export default ChatListHeader;
