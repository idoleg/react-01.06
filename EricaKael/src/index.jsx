import React from 'react';
import ReactDOM from 'react-dom';
import Router from './containers/Router/Router'
//import App from './components/Layout';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore, {history} from './store/utils/store';

const {store, persistor}=initStore();
const mountPoint = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <MultiThemeProvider>
                    <Router />
                </MultiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    mountPoint
);