import {
  GET_CARS,
  CLEAN_STATE,
  ORDER_CARS_ALF,
  ORDER_CARS_KM,
  ORDER_CARS_PRICE,
  FILTER_BY_YEAR,
  FILTER_BY_BRAND,
  LOADING_ACTION,
  GET_CAR_BY_NAME,
  PUT_CAR,
  DELETE_CAR,
  POST_CAR,
  GET_CARS_DETAIL,
} from "./action-types";

const initialState = {
  cars: [],
  allcars: [],
  detail: {},
  favorites: [],
  publications: [],
  loading: true,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
        allcars: action.payload,
        loading: false,
      };
    case GET_CAR_BY_NAME:
      return {
        ...state,
        cars: action.payload,
        loading: false,
      };
    case FILTER_BY_BRAND:
      let allcars = [...state.allcars];
      let carfilter1 =
        action.payload === "All"
          ? allcars
          : allcars.filter((e) => e.brand === action.payload);
      return {
        ...state,
        cars: carfilter1,
        loading: false,
      };
    case FILTER_BY_YEAR:
      let allcars1 = [...state.allcars];
      let carfilter2 =
        action.payload === "All"
          ? allcars1
          : allcars1.filter((e) => e.year === parseInt(action.payload));
      return {
        ...state,
        cars: carfilter2,
        loading: false,
      };
    case ORDER_CARS_ALF:
      let sortedcars = [...state.cars];
      sortedcars =
        action.payload === "atoz"
          ? state.cars.sort(function (a, b) {
              if (a.model.toLowerCase() < b.model.toLowerCase()) return -1;
              if (a.model.toLowerCase() > b.model.toLowerCase()) return 1;
              return 0;
            })
          : state.cars.sort(function (a, b) {
              if (a.model.toLowerCase() < b.model.toLowerCase()) return 1;
              if (a.model.toLowerCase() > b.model.toLowerCase()) return -1;
              return 0;
            });
      return {
        ...state,
        cars: sortedcars,
        loading: false,
      };
    case ORDER_CARS_PRICE:
      let sortedArrPrice =
        action.payload === "mayp"
          ? state.cars.sort(function (a, b) {
              if (a.price > b.price) {
                return 1;
              }
              if (b.price > a.price) {
                return -1;
              }
              return 0;
            })
          : state.cars.sort(function (a, b) {
              if (a.price > b.price) {
                return -1;
              }
              if (b.price > a.price) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        cars: sortedArrPrice,
        loading: false,
      };
    case ORDER_CARS_KM:
      let sortedArrKM =
        action.payload === "mayp"
          ? state.cars.sort(function (a, b) {
              if (a.km > b.km) {
                return 1;
              }
              if (b.km > a.km) {
                return -1;
              }
              return 0;
            })
          : state.cars.sort(function (a, b) {
              if (a.km > b.km) {
                return -1;
              }
              if (b.km > a.km) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        cars: sortedArrKM,
        loading: false,
      };
    case GET_CARS_DETAIL:
      return {
        ...state,
        detail: action.payload,
        loading: false,
      };
    case "ADD_FAVORITE": {
      const user = action.payload.userId;
      const car = action.payload.carId;
      const userFavorites = state.favorites[user];
      if (userFavorites)
        return {
          ...state,
          favorites: {
            ...state.favorites,
            [user || "invitado"]: [...state.favorites[user], car],
          },
        };
      else
        return {
          ...state,
          favorites: { ...state.favorites, [user || "invitado"]: [car] },
          loading: false,
        };
    }
    case "REMOVE_FAVORITE": {
      const user = action.payload.userId;
      const car = action.payload.carId;
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [user || "invitado"]: state.favorites[user].filter(
            (p) => p !== car
          ),
        },
      };
    }

    case CLEAN_STATE:
      return {
        ...state,
        detail: {},
        loading: false,
      };
    case POST_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload],
        loading: false,
      };
    
    case "LOADING_ACTION": 
        return {
          ...state,
          loading: true,
        };
    
    default:
      return state;
  }
}

export default Reducer;
