import * as actionTypes from "../actions/actionTypes";

const initiailState = {
    orders: [],
    loading: false,
    purhased: false,
};

const reducer = (state = initiailState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false,
            };
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId,
            };
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder),
            };
        case actionTypes.PURCHASE_BURGER_FAILED:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders,
            };
        case actionTypes.FETCH_ORDERS_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
