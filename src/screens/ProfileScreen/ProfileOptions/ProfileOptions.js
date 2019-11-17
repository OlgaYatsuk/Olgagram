import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ThemeToggler from "./ThemeToggler";
import PrivacySettings from "./PrivacySettings";

const ProfileOptions = () => {
  return (
    <View style={styles.ProfileOptions}>
      <View style={styles.ProfileOption}>
        <Text style={styles.ProfileOptionText}>Enable dark mode</Text>
        <ThemeToggler />
      </View>
      <View style={styles.ProfileOption}>
        <Text style={styles.ProfileOptionText}>Share online status</Text>
        <PrivacySettings />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  ProfileOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#cecece",
    borderTopWidth: 1,
  },

  ProfileOptions: {
    marginTop: 32,
    borderColor: "#cecece",
    borderBottomWidth: 1,
  },

  ProfileOptionText: {
    fontSize: 16,
  }
});

export default ProfileOptions;
