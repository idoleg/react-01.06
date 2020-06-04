import React from 'react'
import ReactDOM from 'React-dom'
import App from './components/App.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


ReactDOM.render(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('root')
    
)