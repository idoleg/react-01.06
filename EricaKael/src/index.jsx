import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router/Router'
//import App from './components/Layout';
import {BrowserRouter} from 'react-router-dom';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const mountPoint = document.getElementById('app')
ReactDOM.render(
    <BrowserRouter>
        <MultiThemeProvider>
            <Router />
        </MultiThemeProvider>
    </BrowserRouter>,
    mountPoint
);