import { 
    GET_CARS, 
    CLEAN_STATE, 
    ORDER_CARS_ALF, 
    ORDER_CARS_KM, 
    ORDER_CARS_PRICE, 
    FILTER_BY_YEAR, 
    FILTER_BY_BRAND, 
    SET_PAGE, 
    LOADING_ACTION, 
    GET_CAR_BY_NAME, 
    PUT_CAR, 
    DELETE_CAR, 
    POST_CAR, 
    GET_CARS_DETAIL,
    ERROR_OCCURRED } from "./action-types";
import axios from "axios";

export function getCars() {
    return function (dispatch) {
        axios.get(`https://pfhenryss-production.up.railway.app/cars`)
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
            var json = await axios.get("https://pfhenryss-production.up.railway.app/cars/" + id)
            return dispatch({
                type: GET_CARS_DETAIL,
                payload: json.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function postCar(body) {
    return async function (dispatch) {
        try {
            var car = await axios.post(`https://pfhenryss-production.up.railway.app/cars`, body);
            return dispatch({
                type: POST_CAR,
                payload: car.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function orderByAlf(payload) {
    return {
      type: ORDER_CARS_ALF,
      payload,
    };
}

export function orderByKM(payload) {
    return {
      type: ORDER_CARS_KM,
      payload,
    };
}

export function orderByPrice(payload) {
    return {
      type: ORDER_CARS_PRICE,
      payload,
    };
}

export function filterByYear(payload) {
    return {
      type: FILTER_BY_YEAR,
      payload,
    };
}

export function filterByBrand(payload) {
    return {
      type: FILTER_BY_BRAND,
      payload,
    };
}

export function getCarByName (model) {
    return async function(dispatch){
    
        await axios.get(`https://pfhenryss-production.up.railway.app/cars?model=${model}`)
        .then(response => (dispatch({type: GET_CAR_BY_NAME, payload: response.data})))
      akodjaohdadada
    }
     
}

export function setCurrentPage(page) {
    return { type: SET_PAGE, payload: page }
};

export function cleanState() {
    return {
        type: CLEAN_STATE
    }
}

export function loadingAction(status) {
    return {
        type: LOADING_ACTION,
        payload: status
    }
}

export function deleteCar(id) {
    return async (dispatch) => {
      try {
        const response = await axios.delete(`https://pfhenryss-production.up.railway.app/cars/${id}`);
        
        if (response.status !== 200) {
            throw new Error('Something went wrong');
          }
          
        dispatch({ type: DELETE_CAR });
      } catch (err) {
        dispatch({ 
            type: ERROR_OCCURRED,   //Esto sirve para los carteles de error de front, hay que verlo
            payload: {
                message: err.message,
            }
        })
      }
    };
  };

export function updateCar (id, payload) { 
    return async (dispatch) => {
    try {
      await axios.put(`https://pfhenryss-production.up.railway.app/cars/${id}`, payload); 
      return dispatch({ type: PUT_CAR }); 
    } catch (err) {
        dispatch({ 
            type: ERROR_OCCURRED,   //Esto sirve para los carteles de error de front, hay que verlo
            payload: {
                message: err.message,
            }
        })
    }
  }
};

export function addFavorite(userId, carId) {
    return async function(dispatch) {
      dispatch({
        type: 'ADD_FAVORITE',
        payload: {
          userId,
          carId
        }
      })
    }
}
  
export function removeFavorite(userId, carId) {
    return async function(dispatch) {
      dispatch({
        type: 'REMOVE_FAVORITE',
        payload: {
          userId,
          carId
        }
      })
    }
  }
