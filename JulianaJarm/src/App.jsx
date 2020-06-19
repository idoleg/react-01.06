import React from 'react';
import ReactDom from 'react-dom';
import ChatContainer from "./containers/ChatContainer";
import {  ChatList } from "./components/ChatList/ChatList";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from "./store";
import { initChats } from "./store/chatActions";



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
                        <ChatList/>
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
// todo include proptypes everywhere

// todo 6. Сделать страницу профиля, располагающуюся по пути /profile/, и ссылку на нее в Header’е мессенджера.
// todo 7. * Реализовать добавление новых чатов в мессенджер.
    Для этого нужно связать воедино чаты, хранящиеся в state MessageField, и чаты, отрисовывающиеся в ChatList.

//todo 5. Перенести в Redux данные профиля и отображать имя (или любую другую информацию из профиля) в Header’е мессенджера.
 */
