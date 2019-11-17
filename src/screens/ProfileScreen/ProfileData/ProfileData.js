import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text, TextInput} from 'react-native';

const ProfileData = ({isEditable, avatarSource, phone, name, onProfileDataChange, onPhotoEdit}) => {


  return (
    <View style={styles.ProfileData}>
      <TouchableOpacity onPress={onPhotoEdit}><Image style={styles.UserImage} source={avatarSource}/></TouchableOpacity>
      <TextInput editable={isEditable} onChange={onProfileDataChange("name")} style={isEditable ? [styles.UserName, styles.EditableProfile] : styles.UserName} value={name}/>
      <TextInput editable={false} onChange={onProfileDataChange("phone")} style={isEditable ? [styles.UserPhone, styles.EditableProfile] : styles.UserName} value={phone}/>
    </View>
  )
};

const styles = StyleSheet.create({
  ProfileData: {
    alignItems: 'center',
    marginTop: 32,
  },

  UserImage: {
    borderRadius: 75,
    marginBottom: 20,
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: '#af6ba5',
  },

  UserName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 2
  },

  EditableProfile: {
    borderBottomWidth: 1,
    borderColor: 'orange'
  },

  UserPhone: {
    color: '#7b7b7b',
    marginTop: 10,
    fontSize: 14,
    paddingBottom: 2
  }
});

export default ProfileData;
