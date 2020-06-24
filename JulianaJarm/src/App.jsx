import React from 'react';
import ChatContainer from "./containers/ChatContainer";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from "./store";
import { initChats } from "./store/chatActions";
import ChatListContainer from "./containers/ChatListContainer";


const store = initStore();
store.dispatch(initChats());

export const App = () => (
    <div className="container">
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>Main page
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
            </BrowserRouter>
        </Provider>
    </div>
)



/*
//todo Lesson 6


//todo 3. Сделать с помощью middleware мигание (подсвечивание в списке на короткое время) чата, в который пришло сообщение от робота.
//todo 4. Подключить Router к Redux и перевести переходы между чатами с <Link> на push().
//todo 5. Подключить redux-persist и сохранять с его помощью чаты и сообщения.
//todo 6. * Реализовать возможность удаления чатов и сообщений.

//todo Lesson 7
//todo 1. Подключить redux-api-middleware.
//todo 2. Организовать загрузку чатов и сообщений через API.
//todo 3. Проводить выделение сущностей (чатов и сообщений) с помощью normalizr.
//todo 4. Загружать данные профиля через API.
 */

