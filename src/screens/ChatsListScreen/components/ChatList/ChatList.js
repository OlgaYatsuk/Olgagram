import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {fetchUsers} from '../../../../actions/fetchUsers'
import {fetchChats} from '../../../../actions/fetchChats'

class ChatList extends Component {

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchChats();
  }

  renderItem = ({item}) => {
    const {navigate} = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          navigate('PersonalChatScreen',
            {chatId: item.chatId, chatName: item.chatWith, userName: this.props.users.name})
        }} style={styles.ChatListItem
      }
      >
        <View style={styles.UserImage}>
          <Text style={styles.UserNameInitials}>{item.chatWith.slice(0, 2)}</Text>
          {item.isOnline && <View style={styles.OnlineStatus}/>}
        </View>
        <View>
          <Text style={styles.BoldText}>{item.chatWith}</Text>
          <Text style={styles.Text}>{item.messages[0].text}</Text>
        </View>
        <Text style={styles.Time}>{item.messages[0].time}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {chats} = this.props;
    const keyExtractor = item => item.chatId.toString();

    return (
      <View>
        <FlatList
          data={chats}
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
    chats: state.chatsReducer.chats,
  }
};

const mapDispatchToProps = {
  fetchUsers,
  fetchChats
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList)

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

  Time: {
    position: 'absolute',
    color: '#909090',
    fontSize: 12,
    top: 15,
    right: 15
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
