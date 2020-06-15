  
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './components/Route'
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Route />
        </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);