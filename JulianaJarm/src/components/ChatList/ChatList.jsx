import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from "@material-ui/core/Button";

export class ChatList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chatName: '',
        }
    }

    handleNameChange = (event) => {
        this.setState({chatName: event.target.value});
    }

    findNewChatId = () => {
        let max = 0;
        this.props.chats.map((chat) => {
            if (chat.id > max) {
                max = chat.id;
            }
        })
        return max += 1;
    }

    setNewChat = () => {
        const chatName = this.state.chatName;
        const chatId = this.findNewChatId();
        return {id: chatId, name: chatName};
    }

    handleCreateChat = () => {
        const chat = this.setNewChat();
        this.props.createChat(chat.id, chat.name);
        this.setState({chatName: ''})
    }

    handleNavigate = (link) => {
        this.props.push(link);
    }

    render() {
        if (this.props.isLoading) {
            return <strong>Подождите, все грузится.</strong>
        }
        const chats = this.props.chats.map((chat, id) => (
                <ListItem
                    key={chat.id}
                    onClick={() => this.handleNavigate(`/chats/${chat.id}`)}>
                        {chat.name}
                        <button onClick={() => this.props.deleteChat(chat.id)}>x</button>
                </ListItem>
        ))

        return (
            <div className="chatList">
                <List>
                    <input type="text" value={this.state.chatName} onChange={this.handleNameChange}/>
                    <Button onClick={this.handleCreateChat}>Create new chat</Button>
                    { chats }
                </List>
            </div>
        )
    }
}
