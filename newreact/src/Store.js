 import { combineReducers, createStore } from "redux";
 const initialState = {
    balance:'',
    fullName:"",
    mobile:null
}

function accountReducer(state=initialState, action){
    switch(action.type){
        case "ADD_MONEY":
            return {...state,balance: state.balance+  +action.payload
            };
        case "WITHDRAW_MONEY":
            return {...state,balance: state.balance - +action.payload
            };
        case "SET_NAME":
            return {...state,fullName: action.payload
            };
        case "SET_MOBILE":
            return {...state,mobile: action.payload
            };
            
        case "ACCOUNT_NUMBER":
            return {...state, accountNumber: action.payload
            };
        case "Balance":
            return {...state, balance: action.payload
            };
       default:
        return state;
}
}
function transactionReducer(state=initialState, action){
    switch(action.type){
       case  "ADD_Transaction" :
        return [...state,{id:action.pyload.id,amount:action.payload.amount, type :action.payload.type, date:action.payload.date}];
        default:
            return state;

    }
}

const rootReducer=combineReducers({
    account: accountReducer,
    transaction: transactionReducer
});

const store = createStore(rootReducer);
store.dispatch({ type: "ADD_MONEY", payload: 1000 });
console.log(store.getState());
store.dispatch({ type: "WITHDRAW_MONEY", payload: "" });
console.log(store.getState());
store.dispatch({ type: "SET_NAME", payload: "Sivaramaiah" });
console.log(store.getState());
store.dispatch({ type: "SET_MOBILE", payload: 7674843429 });
console.log(store.getState());
store.dispatch({ type: "ACCOUNT_NUMBER", payload: 8780101002647 });
console.log(store.getState());
store.dispatch({ type: "Balance", payload:""});
console.log(store.getState());

 export default store;
    export { accountReducer, transactionReducer };
    