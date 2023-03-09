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
  GET_CAR_BY_BRAND,
  PUT_CAR,
  DELETE_CAR,
  POST_CAR,
  GET_CARS_DETAIL,
  ERROR_OCCURRED,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ALL_USERS,
  CREATE_USER,
  GET_USER_PROFILE,
  GET_CAR_FAVORITES,
  ADD_TO_PUBLICATIONS
} from "./action-types";
import axios from "axios";


export function getCars() {
  return function (dispatch) {
    axios
      .get(`/cars`)
      .then((response) => response.data)
      .then((response) => {
        dispatch({ type: GET_CARS, payload: response });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getCarsDetail(carId) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "/cars/" + carId
      );
      return dispatch({
        type: GET_CARS_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postCar(body) {
  return async function (dispatch) {
    try {
      var car = await axios.post(
        `/cars`,
        body
      );
      return dispatch({
        type: POST_CAR,
        payload: car.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
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

export function getCarByName(model) {
  return async function (dispatch) {
    await axios
      .get(`/cars?model=${model}`)
      .then((response) =>
        dispatch({ type: GET_CAR_BY_NAME, payload: response.data })
      );
  };
}

export function getCarByBrand(brand) {
  return async function (dispatch) {
    await axios
      .get(`/cars?brand=${brand}`)
      .then((response) =>
        dispatch({ type: GET_CAR_BY_BRAND, payload: response.data })
      );
  };
}

export function setCurrentPage(page) {
  return { type: SET_PAGE, payload: page };
}

export function cleanState() {
  return {
    type: CLEAN_STATE,
  };
}

export function loadingAction(status) {
  return {
    type: LOADING_ACTION,
    payload: status,
  };
}

export function deleteCar(carId) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `/cars/${carId}`
      );

      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }

      dispatch({ type: DELETE_CAR });
    } catch (err) {
      dispatch({
        type: ERROR_OCCURRED, //Esto sirve para los carteles de error de front, hay que verlo
        payload: {
          message: err.message,
        },
      });
    }
  };
}

export function updateCar(carId, payload) {
  return async (dispatch) => {
    try {
      await axios.put(
        `/cars/${carId}`,
        payload
      );
      return dispatch({ type: PUT_CAR });
    } catch (err) {
      dispatch({
        type: ERROR_OCCURRED, //Esto sirve para los carteles de error de front, hay que verlo
        payload: {
          message: err.message,
        },
      });
    }
  };
}

export function addFavorite(userId, carId) {
  return async function (dispatch) {
    dispatch({
      type: ADD_FAVORITE,
      payload: {
        userId,
        carId,
      },
    });
  };
}

export const getFavorites = () => {
  return async function (dispatch) {
    try {
      const allFavorites = await axios.get(
        `/favorites`
      );
      dispatch({
        type: GET_CAR_FAVORITES,
        payload: allFavorites.data,
      });
    } catch (error) {
      console.log("Error action allFavorites", error);
    }
  };
}

export function removeFavorite(userId, carId) {
  return async function (dispatch) {
    dispatch({
      type: REMOVE_FAVORITE,
      payload: {
        userId,
        carId,
      },
    });
  };
}
export const allUsers = () => {
  return async function (dispatch) {
    try {
      const allUsers = await axios.get(
        `/user`
      );
      dispatch({
        type: ALL_USERS,
        payload: allUsers.data,
      });
    } catch (error) {
      console.log("Error action allUsers", error);
    }
  };
};
export const createUs = (payload) => {
  return async function (dispatch) {
    try {
      const newUs = await axios.post(
        `/user`,
        payload
      );
      dispatch({
        type: CREATE_USER,
        payload: newUs.data,
      });
    } catch (error) {
      console.log("error en action/createUser", error);
    }
  };
};

export function getUsersDetails(email) {
  return async function (dispatch) {
    let json = await axios.get(
      `/user/${email}`
    );
    return dispatch({
      type: GET_USER_PROFILE,
      payload: json.data,
    });
  };
}

export function addToPublications(id){
  return{
    type:ADD_TO_PUBLICATIONS,
    payload:id
  }
}
