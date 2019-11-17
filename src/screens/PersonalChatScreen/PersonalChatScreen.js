import React, {Component} from 'react';
import {View, FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import Message from './components/Message'
import ChatFooter from "./components/ChatFooter";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import {sendMessage} from "../../actions/sendMessage";
import {connect} from "react-redux";
import {fetchChats} from '../../actions/fetchChats'

const keyExtractor = item => item.text.toString();

class PersonalChatScreen extends Component {
  componentDidMount() {
    this.props.fetchChats();
  }

  renderItem = ({item}) => {
    const {params} = this.props.navigation.state;
    return (<Message
        text={item.text}
        time={item.time}
        userName={params.userName}
        sender={item.senderName}
      />
    )
  };

  render() {
    const {params} = this.props.navigation.state;
    const currentChat = this.props.chats.filter(chat => chat.chatId === params.chatId)

    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        <ChatHeader
          chatName={params.chatName}
        />
        <View style={styles.MessagesWrapper}>
          <FlatList
            data={currentChat[0].messages}
            renderItem={this.renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
        <ChatFooter
          chatId={params.chatId}
          sendMessage={this.props.sendMessage}
          userName={params.userName}
          chatName={params.chatName}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  return {
    chats: state.chatsReducer.chats,
  }
};

const mapDispatchToProps = {
  sendMessage,
  fetchChats
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalChatScreen)

const styles = StyleSheet.create({
  MessagesWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  },
});

