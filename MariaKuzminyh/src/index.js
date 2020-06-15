import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers/App';

const mountPoint = document.querySelector("#root");
ReactDOM.render(<App />, mountPoint)