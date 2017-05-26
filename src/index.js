import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import './Styles/index.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux' // It is the connector between react and redux.
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
