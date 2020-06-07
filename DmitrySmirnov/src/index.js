import React, { createElement } from 'react';
import ReactDom from 'react-dom';

const linkElement = <a href="//ya.ru"> Link to yandex</a>
//const linkElement = createElement('a', {href:'//ya.ru'}, 'link to yandex')
const mountPoint = document.getElementById('root')
ReactDom.render(linkElement ,mountPoint)


