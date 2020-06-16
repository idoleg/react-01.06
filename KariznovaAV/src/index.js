import React, {createElement}  from 'react';
import ReactDom from "react-dom";

const messages = [
    {name: 'Ivan', content: 'Hello'},
    {name: 'Oleg', content: 'Hi'},
    {name: 'Ivan', content: 'How are u?'},
]

const Message = ({name, content}) => <li>{name}: {content}</li> 

const MessageList = ({messages}) => (
    <ul>
        {messages.map(item => <Message name={item.name} content={item.content}/>)}
    </ul>
)
/*function Link(props) {
    return <a href={'//' + props.url}>'Link to {props.url}'</a>
}*/
//const linkElement = <a href='//ya.ru'>'Link to yandex'</a>
// createElement('a', {href: '//ya.ru'}, 'Link to yandex')
const mountPoint = document.getElementById('root');
ReactDom.render(<MessageList messages = {messages}/>, mountPoint)