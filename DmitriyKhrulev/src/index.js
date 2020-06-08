import React, { createElement } from 'react';
import ReactDom from 'react-dom';
import SendButton from './components/SendButton';
// import { App } from './components/App';


const mountPoint = document.getElementById('root');
ReactDom.render(<SendButton />, mountPoint);
// ReactDom.render(<App />, mountPoint);
