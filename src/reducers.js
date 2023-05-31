import { combineReducers } from "redux";

const orderBookReducer = (state = [], action) => {
    switch(action.type) {
        case 'UPDATE_ORDER_BOOK':
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    orderBook: orderBookReducer,
});

export default rootReducer;
