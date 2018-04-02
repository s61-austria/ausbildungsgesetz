import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger';
import {MuiThemeProvider} from 'material-ui'

import reducers from './reducers';
import routes from './Routes'
import thunk from "redux-thunk";
import persistState from 'redux-localstorage'
import hashHistory from "react-router/es/hashHistory";
import {Router} from "react-router";

const persist = compose(persistState());

const store = createStore(
    reducers,
    applyMiddleware(logger),
    applyMiddleware(thunk),
    persist
);


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router
            history={hashHistory}
            routes={routes}/>
        </MuiThemeProvider>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
