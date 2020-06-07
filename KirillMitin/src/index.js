import React from 'react';
import ReactDom from 'react-dom'
import MessageField from './components/MessageField/MessageField'



const mountPoint = document.getElementById('root')
ReactDom.render(<MessageField />, mountPoint);