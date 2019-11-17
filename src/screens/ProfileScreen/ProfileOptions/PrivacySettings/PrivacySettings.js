import React from 'react';
import {Switch} from 'react-native';

const PrivacySettings = ({isStatusShared, onStatusToggle}) => {
  return (
    <Switch tintColor={'#000'} value={isStatusShared} onValueChange={onStatusToggle}/>
  )
};

export default PrivacySettings;
