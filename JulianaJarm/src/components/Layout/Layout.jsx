import React from 'react';
import PropTypes from 'prop-types';
import { Chat} from "../Chat/Chat";
import { Header } from "../Header/Header";
import { ChatList } from "../ChatList/ChatList";

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Chat />
                <ChatList />
            </div>
        )
    }
}

//todo -- Layout должен быть вверху приложения (подключаться в index.jsx), а ChatList, Header и Chat внутри него;