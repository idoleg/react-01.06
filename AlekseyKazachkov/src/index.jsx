import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Route';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore, { history } from './utils/store';

const { store, persistor } = initStore();

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
   document.getElementById('root'),
);