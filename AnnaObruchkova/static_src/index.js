import React, { createElement} from 'react';
import ReactDom from 'react-dom';


const MessageList = () => (
    <h1>Заглушка!</h1>
)

const mountPoint = document.getElementById('root')
ReactDom.render(<MessageList />, mountPoint)

