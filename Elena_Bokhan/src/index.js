import React from 'react';
import ReactDom from 'react-dom';
import MessageList from './components/MessageList/MessageList.jsx';
import './layout/style/main.css';

const mountPoint = document.getElementById('root');




ReactDom.render(<MessageList />, mountPoint);
