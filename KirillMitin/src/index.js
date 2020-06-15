import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App.jsx'



const mountPoint = document.getElementById('root')
ReactDom.render(<App />, mountPoint)