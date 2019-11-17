import React, {Component} from 'react';
import ProfileData from './ProfileData';
import ImagePicker from 'react-native-image-picker';

class ProfileDataContainer extends Component {
  state = {
    name: 'User Name',
    phone: '+380669000100',
    avatarSource: null,
  };

  handlePhotoEdit = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  handleDataProfileChange = (name: string) => (event: SyntheticEvent<HTMLInputElement>): void => {
    const value = event.nativeEvent.text;

    this.setState({
      [name]: value
    })
  };

  render () {
    return(
      <ProfileData
        isEditable={this.props.isEditable}
        onPhotoEdit={this.handlePhotoEdit}
        onProfileDataChange={this.handleDataProfileChange}
        name={this.state.name}
        phone={this.state.phone}
        avatarSource={this.state.avatarSource}
      />
    )
  }
}

export default ProfileDataContainer;
