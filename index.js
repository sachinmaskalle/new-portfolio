import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

const rootElement = document.getElementById('root');

if(rootElement) {
    console.log('Application bootstrapped successfully');
} else {
    console.log('Unable to find root element..!')
}

ReactDOM.render(<App></App>, rootElement);
