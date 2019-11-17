import React, {Component} from 'react';

import PrivacySettings from './PrivacySettings';

class PrivacySettingsContainer extends Component {
  state = {
    isStatusShared: false
  };

  handleStatusToggle = () => {
    this.setState({
      isStatusShared: !this.state.isStatusShared
    });
  };

  render() {
    const {isStatusShared} = this.state;

    return(
      <PrivacySettings
        isStatusShared={isStatusShared}
        onStatusToggle={this.handleStatusToggle}
      />
    )
  }
}

export default PrivacySettingsContainer;
