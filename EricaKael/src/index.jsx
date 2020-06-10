import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Layout';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const mountPoint = document.getElementById('app')
ReactDOM.render(
    <MultiThemeProvider>
        <App />
    </MultiThemeProvider>,
    mountPoint
);