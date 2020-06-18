import React from 'react';
import ReactDOM from 'react-dom';
import Router from './containers/Router/Router'
//import App from './components/Layout';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore from './store/utils/store';


const mountPoint = document.getElementById('app')
ReactDOM.render(
    <Provider store={initStore()}>
        <BrowserRouter>
            <MultiThemeProvider>
                <Router />
            </MultiThemeProvider>
        </BrowserRouter>
    </Provider>,
    mountPoint
);