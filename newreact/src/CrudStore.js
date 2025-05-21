
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import CrudReducer from './CrudReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const CrudStore = createStore(CrudReducer, composeEnhancers(applyMiddleware(thunk)));

export default CrudStore;