import React, { createElement } from 'react';
import ReactDom from 'react-dom';
import Layout from './Layout/Layout';
// import Header from './container/Header/Header'
{/* <Header /> */}
const mountPoint = document.getElementById('root')
ReactDom.render(<Layout />, mountPoint)