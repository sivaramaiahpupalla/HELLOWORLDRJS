import { createStore, applyMiddleware } from 'redux';
import{ thunk} from 'redux-thunk';
const initialState = {
    userData:[],
};

function userReducer(state = initialState, action) {
    console.log("action", action);
    console.log("state", state);
    switch(action.type) {
        case 'add':
            return {
                ...state,
                userData: action.payload,
            };
            default:
                return state;
    }
    
}
    
    const StoreThunk = createStore(userReducer, applyMiddleware(thunk));
    export default StoreThunk;