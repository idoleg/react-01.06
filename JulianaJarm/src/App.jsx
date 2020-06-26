import React from 'react';
import ChatContainer from "./containers/ChatContainer";
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore, history } from "./store";
import ChatListContainer from "./containers/ChatListContainer";
import { ConnectedRouter } from "connected-react-router";
import { fetchChats } from "./store/chatOperations";

const store = initStore();
store.dispatch(fetchChats());

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
//todo Lesson 8
//todo 1. Установить Lighthouse.
//todo 2. Подключить service-worker.
//todo 3. Добавить Web App Manifest и иконки.
//todo 4. Установить приложение на рабочий стол.
//todo 5. Реализовать мобильную верстку.
//todo 6. Реализовать всплывающее окно с предложением об установке для iPhone.
//todo 7. Добавить скрипт отслеживания установок.
//todo 8. Реализовать подписку на push-уведомления и получить subscriptionID.
 */

