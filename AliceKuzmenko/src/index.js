import React from 'react';
import ReactDOM from 'react-dom';


//import {MessageList} from './components/MessageList/MessageList'
import {ChatContainer} from './containers/ChatContainer/ChatContainer'


const mountPoint = document.getElementById('root')
//ReactDOM.render(<MessageList  />, mountPoint)
ReactDOM.render(<ChatContainer  />, mountPoint)
