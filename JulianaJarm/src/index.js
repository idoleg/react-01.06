import React from 'react';
import ReactDom from 'react-dom';
import { App } from "./App";

const mountPoint = document.getElementById('root');

ReactDom.render(
    <App />,
    mountPoint
);

/*
// todo include proptypes everywhere


// todo 1. Подключить BrowserRouter (из react-router-dom)
// todo 2. Создать верхний компонент Router со Switch и Route’ами.
// todo 3. Разбить приложение на чаты с помощью роутера (URLs: /chat/<chat_id>/).
// todo 4. Реализовать хранение сообщений в словаре с id в качестве ключа.
// todo 5. Реализовать хранение чатов в словаре с id в качестве ключа,
    а в качестве значения со словарем из названия чата и списка id-шников сообщений из этого чата.
// todo 6. Сделать страницу профиля, располагающуюся по пути /profile/, и ссылку на нее в Header’е мессенджера.
// todo 7. * Реализовать добавление новых чатов в мессенджер.
    Для этого нужно связать воедино чаты, хранящиеся в state MessageField, и чаты, отрисовывающиеся в ChatList.
// Подсказки:
// 1) можно перенести state в другой компонент;
// 2) можно прокидывать функции в нижестоящие компоненты в качестве props.
 */