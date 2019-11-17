import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';

import editIcon from '../../../img/edit.svg';

const ProfileToolbar = ({onProfileDataEdit}) => {
  return (
    <View style={styles.Toolbar}>
      <TouchableOpacity onPress={onProfileDataEdit}>
         <Image style={styles.Edit} source={require('../../../img/edit.png')} />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  Toolbar: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  Edit: {
    width: 32,
    height: 32,
  }
});

export default ProfileToolbar;
