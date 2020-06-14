import React from 'react';
import ReactDOM from 'react-dom';

import { MessageArea } from './components/MessageArea/MessageArea';

const messages = [
  {
    id: 0,
    name: 'Мария',
    content: 'Привет)'
  },
  {
    id: 1,
    name: 'Мария',
    content: 'Как у тебя дела?'
  },
  {
    id: 2,
    name: 'Иван',
    content: 'Привет) На карантине скучно. Хочется погулять'
  },
  {
    id: 3,
    name: 'Иван',
    content: 'Как ты?'
  }
];

const mountPoint = document.querySelector("#root");
ReactDOM.render(<MessageArea messages={ messages } />, mountPoint)