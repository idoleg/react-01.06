import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
    'h1',
    { className: "element" },
    '�������, �� ���������� React',
);

ReactDOM.render(
    element,
    document.getElementById('root'),
);