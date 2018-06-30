import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import rootReducer from './rootreducer';

const store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
)

export default store;