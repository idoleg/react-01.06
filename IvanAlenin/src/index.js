import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Кэширование, оптимизация для офлайн, почитать в будущем
// https://create-react-app.dev/docs/making-a-progressive-web-app/
// https://habr.com/ru/company/2gis/blog/345552/
serviceWorker.unregister();