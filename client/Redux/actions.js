import { GET_CARS, CLEAN_STATE, ORDER_CARS_ALF, ORDER_CARS_KM, ORDER_CARS_PRICE, FILTER_BY_YEAR, FILTER_BY_BRAND, SET_PAGE, LOADING_ACTION, GET_CAR_BY_NAME, PUT_CAR, DELETE_CAR, POST_CAR, GET_CARS_DETAIL } from "./actions-types";
import axios from "axios";

export function getCars() {
    return function (dispatch) {
        axios.get(`http://localhost:3001/cars`)
            .then(response => response.data)
            .then(response => {
                dispatch({ type: GET_CARS, payload: response })
            })
            .catch(error => {
                console.log(error)
            })
    };
};

export function getCarsDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get("http://localhost:3001/cars/" + id)
            return dispatch({
                type: GET_CARS_DETAIL,
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}