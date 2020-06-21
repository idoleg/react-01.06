// Используются только стили Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Для работы динамических плагинов Bootstrap
// подключить при необходимости:
import 'bootstrap';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// package.json
// "jquery": "^3.5.1",
// "popper.js": "^1.16.1",
// "bootstrap": "^4.5.0"

import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // <React.StrictMode>
        <App/>,
    // </React.StrictMode>,
    document.getElementById('root')
);



// Кэширование, оптимизация для офлайн, почитать в будущем
// https://create-react-app.dev/docs/making-a-progressive-web-app/
// https://habr.com/ru/company/2gis/blog/345552/
// serviceWorker.unregister();