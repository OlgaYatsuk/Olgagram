// @flow

import React from 'react';
import {Text, Image, ActivityIndicator, TouchableOpacity, TextInput, StyleSheet, View, Button} from 'react-native';


const AuthenticationScreen = ({isAuthenticationFailed, onAuthenticationInputChange, onAuthenticationSubmit, isLoading}: {
  isLoading: boolean, isAuthenticationFailed: boolean, onAuthenticationInputChange: (name: string) => (event: SyntheticEvent<HTMLInputElement>,) => void, onAuthenticationSubmit: () => void
}) => {
  return (
    <View style={styles.View}>
      <Text style={styles.Title}>Welcome to <Text style={styles.PurpleTitle}>Olgagram!</Text></Text>
      <Text style={styles.Subtitle}>Enter your data to start chatting</Text>
      <Image source={require('../../img/login.png')} style={styles.Image}/>
      {isAuthenticationFailed && <Text style={styles.TextError}>Please, provide your valid information.</Text>}
      <View style={styles.Form}>
        <TextInput
          editable={!isLoading}
          placeholder="Phone number"
          style={styles.Input}
          onChange={onAuthenticationInputChange('phoneNumber')}
        />
        <TextInput
          editable={!isLoading}
          placeholder="Password"
          style={styles.Input}
          onChange={onAuthenticationInputChange('password')}
        />
        <TouchableOpacity style={styles.Submit} onPress={onAuthenticationSubmit}>
          <Text style={styles.SubmitText}>Start messaging</Text>
        </TouchableOpacity>
      </View>
      {isLoading && <ActivityIndicator style={styles.ActivityIndicatorStyle} size="large" color="#522c86"/>}
    </View>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  Form: {
    position: 'relative'
  },

  PurpleTitle: {
    color: '#522c86',
  },

  Input: {
    fontSize: 16,
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#522c86',
    margin: 8,
    backgroundColor: '#fff',
  },

  ActivityIndicatorStyle: {
    marginTop: 20
  },

  InputError: {
    borderColor: 'red',
    borderWidth: 1,
  },

  InputDisabled: {
    backgroundColor: '#eeeeee',
    borderColor: '#eeeeee',
    borderWidth: 1,
  },

  Title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    marginBottom: 10,
  },

  FormTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 1.3,
  },

  Image: {
    alignSelf: 'center',
    height: 300,
    marginBottom: 40,
    marginTop: 40,
    width: '80%',
  },

  Subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#8d8d8d',
    fontWeight: 'bold'
  },

  TextError: {
    fontSize: 18,
    top: 450,
    color: 'red',
    alignSelf: 'center',
    position: 'absolute'
  },

  View: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },

  Submit: {
    padding: 18,
    width: '64%',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#522c86'
  },

  SubmitText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 0.7,
    fontWeight: 'bold'
  },
});
