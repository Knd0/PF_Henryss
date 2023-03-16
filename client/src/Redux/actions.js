import {
  GET_CAR_PUBLICATIONS,
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
  ADD_TO_PUBLICATIONS,
  FILTER_BY_YEAR_AND_BRAND,
  USER_DELETE,
  DELETE_REVIEW,
  ADD_TO_REVIEWS,
  SEARCH_USER_ADMIN 
} from "./action-types";
import axios from "axios";

export function getCars() {
  return function (dispatch) {
    dispatch({ type: LOADING_ACTION });
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
    dispatch({ type: LOADING_ACTION });
    try {
      var json = await axios.get("/cars/" + carId);
      return dispatch({
        type: GET_CARS_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postCar(userId, body) {
  return async function (dispatch) {
    try {
      var car = await axios.post(`/cars/${userId}`, body);
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

export function filterByYearAndBrand(year, brand) {
  return {
    type: FILTER_BY_YEAR_AND_BRAND,
    year,
    brand,
  };
}

export function getCarByName(model) {
  return async function (dispatch) {
    dispatch({ type: LOADING_ACTION });
    await axios
      .get(`/cars?model=${model}`)
      .then((response) =>
        dispatch({ type: GET_CAR_BY_NAME, payload: response.data })
      );
  };
}

export function getCarByBrand(brand) {
  return async function (dispatch) {
    dispatch({ type: LOADING_ACTION });
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

export function deleteCar(carId, userId) {
  return async (dispatch) => {
    try {
      await axios.delete(`/publications/${userId}`, { data: { carId } });
      return dispatch({
        type: DELETE_CAR,
        payload: {
          userId,
          carId,
        },
      });
    } catch (err) {
      dispatch({
        type: ERROR_OCCURRED,
        payload: {
          message: err.message,
        },
      });
    }
  };
}

export function deleteCarAdmin(carId) {
  return async (dispatch) => {
    try {
      await axios.delete(`/cars/${carId}`);
      return dispatch({
        type: DELETE_CAR,
        payload: carId,
      });
    } catch (err) {
      dispatch({
        type: ERROR_OCCURRED,
        payload: {
          message: err.message,
        },
      });
    }
  };
}

export function updateCar(carId, payload, userId) {
  //pasarle user id
  return async (dispatch) => {
    try {
      await axios.put(`/cars/${userId}/${carId}`, payload);
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
    try {
      await axios.post(`/favorites/${userId}/${carId}`, { userId, carId }); // Se corrige el segundo argumento
      dispatch({
        type: ADD_FAVORITE,
        payload: {
          userId,
          carId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getFavorites = (userId) => {
  return async function (dispatch) {
    try {
      const allFavorites = await axios.get(`/favorites/${userId}`);
      dispatch({
        type: GET_CAR_FAVORITES,
        payload: allFavorites.data,
      });
    } catch (error) {
      console.log("Error action allFavorites", error);
    }
  };
};
export const getpublications = (userId) => {
  return async function (dispatch) {
    try {
      const allPublications = await axios.get(`/publications/${userId}`);
      dispatch({
        type: GET_CAR_PUBLICATIONS,
        payload: allPublications.data,
      });
    } catch (error) {
      console.log("Error action allFavorites", error);
    }
  };
};

export function removeFavorite(userId, carId) {
  return async function (dispatch) {
    try {
      await axios.delete(`/favorites/${userId}/${carId}`, { userId, carId });
      dispatch({
        type: REMOVE_FAVORITE,
        payload: {
          userId,
          carId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const allUsers = () => {
  return async function (dispatch) {
    try {
      const allUsers = await axios.get(`/user`);
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
      const newUs = await axios.post(`/user`, payload);
      console.log("Server response:", newUs.data); // Agregar este mensaje de registro
      return dispatch({
        type: CREATE_USER,
        payload: newUs.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getUsersDetails(email) {
  return async function (dispatch) {
    let json = await axios.get(`/user?email=${email}`);
    return dispatch({
      type: GET_USER_PROFILE,
      payload: json.data,
    });
  };
}

export function UserDelete(userId) {
  return async function (dispatch) {
    let json = await axios.delete(`/user/${userId}`);
    return dispatch({
      type: USER_DELETE,
      payload: json.data,
    });
  };
}

export function addToPublications(userId, carId) {
  return async function (dispatch) {
    try {
      await axios.post(`/publications/${userId}`, { carId });
      dispatch({
        type: ADD_TO_PUBLICATIONS,
        payload: carId,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeAdminReview(review) {
  return {
    type: DELETE_REVIEW,
    payload: review,
  };
}
/* 
export function addToReviews(name, date, body, ratingNum) {
  return {
    type: ADD_TO_REVIEWS,
    payload: {
      date,
      body,
      ratingNum,
      name,
    },
  };
} */

export const addReview = (userId,payload) => {
  return async function () {
  
      const allReviews = await axios.post(`/review/${userId}`,payload);
      return allReviews
   
}

};

export function getReviews() {
  return async function (dispatch) {


  try {
    var json = await axios.get(`/review`);
    console.log("ESTO ES  JASON==============>",json.data)
       
    return dispatch( {
      type: ADD_TO_REVIEWS,
        payload: json.data
    })
  } catch (error) {
    console.log(error)
  }

/*       
 await axios.get("/review")
.then((response) => {
  console.log(response.data)
   dispatch({type: ADD_TO_REVIEWS, payload: response.data})
}).catch((error) => {
    console.log(error)
}
)
  }; */
}
}


export function updateReview(userId,payload) {
  return async function (dispatch) {

       await axios.put(`/review/${userId}`,payload);

}
}

export function searchUserAdmin(payload){
  return{
    type: SEARCH_USER_ADMIN,
    payload
  }
}



