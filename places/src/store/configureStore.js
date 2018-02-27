import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import { routerReducer } from 'react-router-redux';

import reducers from '../reducers';

const enhancer = compose(
    persistState('userReducer'),

);
const rootReducer = combineReducers({
    ...reducers,
    router: routerReducer
});


export default function configureStore(middleware){
    return createStore(
        rootReducer,
        applyMiddleware(middleware),
        enhancer);
};

