import { GET_CARS, CLEAN_STATE, ORDER_CARS_ALF, ORDER_CARS_KM, ORDER_CARS_PRICE, FILTER_BY_YEAR, FILTER_BY_BRAND, LOADING_ACTION, GET_CAR_BY_NAME, PUT_CAR, DELETE_CAR, POST_CAR, GET_CARS_DETAIL } from "../Redux/action-types";

const initialState = {
    cars: [],
    allcars: [],
    detail: {}
};

function rootReducer (state = initialState, action){
    switch(action.type) {
        case GET_CARS:
            return{
                ...state,
                cars: action.payload,
                allcars: action.payload
            }
        case GET_CAR_BY_NAME:
            return {
                ...state,
                cars: action.payload,
            }
        case FILTER_BY_BRAND: 
            let allcars = [...state.allcars]
            let carfilter1 = action.payload === "All" ? allcars : allcars.filter((e) => e.brand === action.payload)
            return {
                ...state,
                cars: carfilter1
            }
        case FILTER_BY_YEAR: 
            let allcars1 = [...state.allcars]
            let carfilter2 = action.payload === "All" ? allcars1 : allcars1.filter((e) => e.year === action.payload)
            return {
                ...state,
                cars: carfilter2
            }
        case ORDER_CARS_ALF:
            let sortedArr = action.payload === "asc" ?
            state.cars.sort(function (a, b) { 
                if(a.name > b.name) {              
                    return 1
                }
                if(b.name > a.name) {
                    return -1
                }
                return 0
            }) :
            state.cars.sort(function (a, b) {
                if(a.name > b.name) {
                    return -1
                }
                if(b.name > a.name) {
                    return 1
                }
                return 0
            })    
            return {
                ...state,
                cars: sortedArr
            }
        case ORDER_CARS_PRICE:
            let sortedArrPrice = action.payload === "mayp" ?
            state.cars.sort(function (a, b) {
                if(a.price > b.price) {
                    return 1
                }
                if(b.price > a.price) {
                    return -1
                }
                return 0
            }) :
            state.cars.sort(function (a, b) {
                if(a.price > b.price) {
                    return -1
                }
                if(b.price > a.price) {
                    return 1
                }
                return 0
            })    
            return {
                ...state,
                cars: sortedArrPrice
            }
        case ORDER_CARS_KM:
                let sortedArrKM = action.payload === "mayp" ?
                state.cars.sort(function (a, b) {
                    if(a.km > b.km) {
                        return 1
                    }
                    if(b.km > a.km) {
                        return -1
                    }
                    return 0
                }) :
                state.cars.sort(function (a, b) {
                    if(a.km > b.km) {
                        return -1
                    }
                    if(b.km > a.km) {
                        return 1
                    }
                    return 0
                })    
                return {
                    ...state,
                    cars: sortedArrKM
            }
        case GET_CARS_DETAIL:
            return{
                ...state,
                detail: action.payload
            }
        case CLEAN_STATE:
            return {
                ...state,
                detail: {}
            }
        case POST_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            };
        default:
            return state;
    }
}

export default rootReducer;