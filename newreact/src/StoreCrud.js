
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { crudReducer } from './reducers';

const StoreCrud = createStore(crudReducer, applyMiddleware(thunk));

export default StoreCrud;
