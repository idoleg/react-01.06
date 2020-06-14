import React, { createElement } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDom from 'react-dom';
import { Chat } from "./components/Chat/Chat";
import { Layout } from "./components/Layout/Layout";
import {ChatList} from "./components/ChatList/ChatList";

const mountPoint = document.getElementById('root');

ReactDom.render(
    <MuiThemeProvider>
        <Chat />
        {/*<ChatList />*/}
    </MuiThemeProvider>,
    mountPoint
);

/*
// todo include proptypes everywhere
// todo Сверстать мессенджер, выделив явно поле для сообщений и визуально разделив сообщения от пользователя и ответы робота.
// todo Layout должен быть вверху приложения (подключаться в index.jsx), а ChatList, Header и Chat внутри него;
// todo Header должен быть вверху Layout и занимать всю ширину;
// todo ChatList и Chat рядом, ниже Header так, Message Field занимал большую часть (например, 30 % на 70 %);
// todo ChatList должен только визуально отражать список из 3–5 чатов. Переключение между чатами реализовывать не нужно;
// todo Для верстки ChatList использовать List из Material-UI.
 */