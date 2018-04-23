import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './router'


ReactDOM.render(<Router></Router>, document.getElementById('root'));
registerServiceWorker();
