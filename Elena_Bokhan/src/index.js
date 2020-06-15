import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './layout/style/main.css';
import { BrowserRouter } from 'react-router-dom';

const mountPoint = document.getElementById('root');

ReactDom.render(<BrowserRouter>
					<App />
				</BrowserRouter>, mountPoint);
