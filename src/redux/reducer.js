import {api} from "../api/api";

export const ADD_COINS = 'ADD-COINS';
export const SORT_COINS = 'SORT-COINS';
export const ADD_COIN = 'ADD-COIN';
export const CHANGE_INPUT_COIN = 'CHANGE-INPUT-COIN';
export const CHANGE_INPUT_USD = 'CHANGE-INPUT-USD';
export const CHANGE_ACTIVITY_INPUT = 'CHANGE-ACTIVITY-INPUT';
export const PAGINATE = 'PAGINATE';
export const  NOT_FOUND = ' NOT_FOUND';


const initialState = {
    coins: [],
    sortType: 'asc',
    value: '',
    coin: null,
    amountUsd: '',
    amountCoin: '',
    disabledUsd: true,
    disabledCoin: false,
    currentPage: 1,
    dataPerPage: 10,
    error: false

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COINS :
            return {
                ...state,
                coins: action.coins
            };
        case SORT_COINS:
            return {
                ...state,
                sortType: action.sortType,
                value: action.value
            };
        case ADD_COIN:
            return {
                ...state,
                coin: action.coin,
            };
        case CHANGE_INPUT_COIN:
            return {
                ...state,
                amountUsd: action.amountUsd,
            };
        case CHANGE_INPUT_USD:
            return {
                ...state,
                amountCoin: action.amountCoin,
            };
        case CHANGE_ACTIVITY_INPUT:
            return {
                ...state,
                disabledUsd: action.disabledUsd,
                disabledCoin: action.disabledCoin
            };
        case PAGINATE:
            return {
                ...state,
                currentPage: action.currentPage
            };

            case  NOT_FOUND:
            return {
                ...state,
                error: true            };
        default:
            return state
    }
};

export const changeActivityInputAC = (disabledUsd, disabledCoin) => {
    return {type: CHANGE_ACTIVITY_INPUT, disabledUsd, disabledCoin}
};
export const handleInputUsdAC = (amountCoin) => {
    return {type: CHANGE_INPUT_USD, amountCoin}
};
export const handleInputCoinAC = (amountUsd) => {
    return {type: CHANGE_INPUT_COIN, amountUsd}
};
export const addCoinAC = (coins) => {
    return {type: ADD_COINS, coins}
};
export const sortCoinsAC = (sortType, value) => {
    return {type: SORT_COINS, sortType, value}
};
export const addUniqueAC = (coin) => {
    return {type: ADD_COIN, coin}
};
export const paginateAC = (currentPage) => {
    return {type: PAGINATE, currentPage}
};

export const notFoundAC = () => {
    return {type: NOT_FOUND}
};


export const addCoinTh = () => {
    return (dispatch) => {
        api.addCoinApi()
            .then((res => {
                let coins = res.data;
                dispatch(addCoinAC(coins))
            }))
    }
};


export const addUniqueCoinTh = (id) => {
    return (dispatch) => {
        api.addUniqueCoinApi(id)
            .then((res => {
                let coin = res.data;
                dispatch(addUniqueAC(coin))

            }))
            .catch(err => {
                dispatch(notFoundAC())
                console.log(err)
            })
    }
};

export default reducer