import { applyMiddleware, createStore, compose } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, loggerMiddleware];
}
export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
