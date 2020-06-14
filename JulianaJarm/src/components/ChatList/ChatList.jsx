import React from 'react';
import PropTypes from 'prop-types';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";


export class ChatList extends React.Component {
    render() {
        return (
            <>
                <List>
                    <Subheader>Recent chats</Subheader>
                    <ListItem
                        primaryText="Brendan Lim"
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Eric Hoffman"
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Grace Ng"
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Kerem Suer"
                        rightIcon={<CommunicationChatBubble />}
                    />
                    <ListItem
                        primaryText="Raquel Parrado"
                        rightIcon={<CommunicationChatBubble />}
                    />
                </List>
                <Divider />
            </>
        )
    }
}

//todo -- ChatList и Chat должны быть расположены рядом друг с другом ниже Header так, чтобы Message Field занимал большую часть (например, 30 % на 70 %);
//todo -- ChatList должен только визуально отражать список из 3–5 чатов (назовите их как угодно) и пока не несет никакой функциональности. Переключение между чатами
//todo ++ Для верстки ChatList использовать List из Material-UI.