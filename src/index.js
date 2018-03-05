import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger';
import {MuiThemeProvider} from 'material-ui'

import reducers from './reducers';
import thunk from "redux-thunk";
import persistState from 'redux-localstorage'

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
            <App/>
        </MuiThemeProvider>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
