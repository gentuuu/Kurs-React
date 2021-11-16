import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createElement(
    'div',
    {
        className: 'wrapper',
    },
    [
        React.createElement(
            'h1',
            {
                className: 'mainHeader',
            },
            'Hallo wrold'
        ),
        React.createElement(
            'h2',
            {
                className:'secpdaryHeader',
            },
            'Hallo Domi'
        )
    ]
);


ReactDOM.render(
    //renerowany element
    // <h1>Hallow word</h1>,
    App,
    // cel
    document.getElementById('root')
);