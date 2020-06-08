import React from 'react';
import ReactDOM from 'react-dom';


import {MessageList} from './components/MessageList/MessageList'


const mountPoint = document.getElementById('root')
ReactDOM.render(<MessageList  />, mountPoint)
