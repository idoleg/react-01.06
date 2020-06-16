import React from 'react';
import ReactDOM from 'react-dom';
import MessageField from './components/chat/MessageField'
import Layout from './components/chat/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
   <MuiThemeProvider>
       <Layout />
   </MuiThemeProvider>,
   document.getElementById('root'),
);