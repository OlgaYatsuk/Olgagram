// @flow

import React, {Component} from 'react';
import ProfileData from './ProfileData';
import ProfileToolbar from './ProfileToolbar';
import ProfileOptions from './ProfileOptions';

type Props = {};

type State = {
  isEditable: boolean
}

class ProfileScreen extends Component<Props, State> {
  state = {
    isEditable: false
  };

  handleProfileDataEdit = (): void => {
    this.setState({
      isEditable: true,
    })
  };

  render() {
    const {isEditable} = this.state;

    return (
      <>
      <ProfileToolbar
        onProfileDataEdit={this.handleProfileDataEdit}
      />
      <ProfileData
        isEditable={isEditable}
      />
      <ProfileOptions />
      </>
    )
  }
}

export default ProfileScreen;
