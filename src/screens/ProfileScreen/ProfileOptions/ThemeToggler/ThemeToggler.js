import React from 'react';
import {Switch} from 'react-native';

const ThemeToggler = ({isDarkMode, onThemeToggle}) => {
  return (
    <Switch value={isDarkMode} onValueChange={onThemeToggle}/>
  )
};

export default ThemeToggler;
