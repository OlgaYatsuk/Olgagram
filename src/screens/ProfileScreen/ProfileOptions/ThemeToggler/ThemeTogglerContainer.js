import React, {Component} from 'react';

import ThemeToggler from './ThemeToggler';

class ThemeTogglerContainer extends Component {
  state = {
    isDarkMode: false
  };

  handleThemeToggle = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode
    });
  };

  render() {
    const {isDarkMode} = this.state;

    return(
      <ThemeToggler
        isDarkMode={isDarkMode}
        onThemeToggle={this.handleThemeToggle}
      />
    )
  }
}

export default ThemeTogglerContainer;
