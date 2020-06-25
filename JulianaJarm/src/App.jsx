import React from 'react';
import ChatContainer from "./containers/ChatContainer";
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore, history } from "./store";
import { initChats } from "./store/chatActions";
import ChatListContainer from "./containers/ChatListContainer";
import { ConnectedRouter } from "connected-react-router";

const store = initStore();
store.dispatch(initChats());

export const App = () => (
    <div className="container">
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" exact>
                        <ChatListContainer />
                    </Route>
                    <Route path="/chats">
                        <ChatListContainer />
                        <Switch>
                            <Route path="/chats" exact component={ChatContainer} />
                            <Route path="/chats/:id" exact component={ChatContainer} />
                        </Switch>
                    </Route>
                    <Route path="/about">It's about page</Route>
                    <Route path="/contacts">It's contacts page</Route>
                    <Route path="/contacts/how">It's contacts page</Route>
                    <Route path="/">It's 404 page</Route>
                </Switch>
            </ConnectedRouter>
        </Provider>
    </div>
)

/*
//todo Lesson 6
//todo 3. Сделать с помощью middleware мигание (подсвечивание в списке на короткое время) чата, в который пришло сообщение от робота.
//todo 6. * Реализовать возможность удаления чатов

//todo Lesson 7
//todo 1. Подключить redux-api-middleware.
//todo 2. Организовать загрузку чатов и сообщений через API.
//todo 3. Проводить выделение сущностей (чатов и сообщений) с помощью normalizr.
//todo 4. Загружать данные профиля через API.
 */

