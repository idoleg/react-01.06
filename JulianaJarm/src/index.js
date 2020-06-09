import React, { createElement } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../../styles/styles.css'
import ReactDom from 'react-dom';
import { MessageField } from "./components/MessageField/MessageField";

const mountPoint = document.getElementById('root');

ReactDom.render(<MessageField />, mountPoint);

/*
todo: 4. Добавить автора к сообщениям и отображать его в интерфейсе. Переделать логику ответа от робота в соответствии с этим.
 */

