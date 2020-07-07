import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';

const mountPoint = document.getElementById('root')
ReactDom.render(<App />, mountPoint)