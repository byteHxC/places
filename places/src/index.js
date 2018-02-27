import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
import configureStore from './store/configureStore';

const history = createHistory()
const middleware = routerMiddleware(history);

const store = configureStore(middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}/>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
