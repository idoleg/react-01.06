import React, { createElement } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDom from 'react-dom';
import { Chat } from "./components/Chat/Chat";
import { Layout } from "./components/Layout/Layout";
import {ChatList} from "./components/ChatList/ChatList";

const mountPoint = document.getElementById('root');

ReactDom.render(
    <MuiThemeProvider>
        <div className="container">
            <ChatList />
            <Chat />
        </div>
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
// todo 1. Подключить BrowserRouter (из react-router-dom)
// todo 2. Создать верхний компонент Router со Switch и Route’ами.
// todo 3. Разбить приложение на чаты с помощью роутера (URLs: /chat/<chat_id>/).
// todo 4. Реализовать хранение сообщений в словаре с id в качестве ключа.
// todo 5. Реализовать хранение чатов в словаре с id в качестве ключа, а в качестве значения со словарем из названия чата и списка id-шников сообщений из этого чата.
// todo 6. Сделать страницу профиля, располагающуюся по пути /profile/, и ссылку на нее в Header’е мессенджера.
// todo 7. * Реализовать добавление новых чатов в мессенджер. Для этого нужно связать воедино чаты, хранящиеся в state MessageField, и чаты, отрисовывающиеся в ChatList.


// Подсказки:
// 1) можно перенести state в другой компонент;
// 2) можно прокидывать функции в нижестоящие компоненты в качестве props.
 */