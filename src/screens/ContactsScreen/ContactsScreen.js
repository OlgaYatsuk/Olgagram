import React, {Component} from 'react';
import {Text, FlatList, TouchableOpacity, View, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {fetchUsers} from "../../actions/fetchUsers";

class ContactsScreen extends Component {

  componentDidMount (){
    this.props.fetchUsers();
  }

  renderItem = ({item}) => {
    const {navigate} = this.props.navigation;

    return (
      <TouchableOpacity style={styles.ChatListItem} onPress={()=> {navigate('PersonalChatScreen', {chatId: item.chatId, chatName: item.name, userName: this.props.users.name})}}>
        <View style={styles.UserImage}>
          <Text style={styles.UserNameInitials}>{item.name.slice(0,2)}</Text>
        </View>
        <View>
          <Text style={styles.BoldText}>{item.name}</Text>
          {item.isOnline && <Text style={styles.Online}>Online now</Text>}
          {!item.isOnline && <Text style={styles.Offline}>Offline</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {users} = this.props;
    const keyExtractor = (item, index) => index.toString();
    return  (
      <View>
        <FlatList
          data={users.contacts}
          renderItem={this.renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
  }
};

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsScreen);



const styles = StyleSheet.create({
  PurpleView: {
    backgroundColor: '#c5c1dd'
  },

  UserImage: {
    borderRadius: 50,
    width: 52,
    height: 52,
    borderWidth: 1,
    marginRight: 20,
    justifyContent: 'center',
    backgroundColor: '#43266e'
  },

  BoldText: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 18,
  },

  ChatListItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingRight: 50,
    alignItems: 'center',
  },

  Text: {
    width: 300,
  },

  Online: {
    color: '#4bbb49',
    fontSize: 12,
  },

  Offline: {
    color: '#a5a4a0',
    fontSize: 12,
  },

  OnlineStatus: {
    width: 12,
    height: 12,
    backgroundColor: '#4bbb49',
    position: 'absolute',
    bottom: 1,
    borderRadius: 16,
    right: -1
  },

  UserNameInitials: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: '#fff',
    textTransform: 'uppercase'
  }
});
