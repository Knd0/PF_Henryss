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
  GET_CAR_BY_BRAND,
  PUT_CAR,
  DELETE_CAR,
  POST_CAR,
  GET_CARS_DETAIL,
  ALL_USERS,
  GET_USER_PROFILE,
  CREATE_USER,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ADD_TO_PUBLICATIONS
} from "./action-types";

const initialState = {
  cars: [],
  allcars: [],
  detail: {},
  favorites: [],
  publications: [],
  users: [],
  usersDetails: [],
  loading: true,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
        allcars: action.payload,
      };
    case GET_CAR_BY_NAME:
      return {
        ...state,
        cars: action.payload,
      };

    case GET_CAR_BY_BRAND:
      return {
        ...state,
        cars: action.payload,
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
      };
    case FILTER_BY_YEAR:
    
      let allcars1 = [...state.allcars];
      let carfilter2 =action.payload=="All"? allcars1:
      allcars1.filter((e) => e.year === parseInt(action.payload));
      return {
        ...state,
        cars: carfilter2,
      };
    case ORDER_CARS_ALF:
      let sortedcars = [...state.cars];
      sortedcars =
        action.payload === "atoz"
          ? state.cars.sort(function (a, b) {
              if (a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;
              if (a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;
              return 0;
            })
          : state.cars.sort(function (a, b) {
              if (a.brand.toLowerCase() < b.brand.toLowerCase()) return 1;
              if (a.brand.toLowerCase() > b.brand.toLowerCase()) return -1;
              return 0;
            });
      return {
        ...state,
        cars: [...sortedcars],
      };
    case ORDER_CARS_PRICE:
     const normalize = price => parseInt(price.replaceAll('.',''),10)
     
      let sortedArrPrice =
        action.payload === "mayp"
          ? state.cars.sort(function (a, b) {
              if (normalize(a.price) > normalize(b.price)) {
                return 1;
              }
              if (normalize(b.price)> normalize(a.price)) {
                return -1;
              }
              return 0;
            })
          : state.cars.sort(function (a, b) {
              if (normalize(a.price) >normalize(b.price)) {
                return -1;
              }
              if (normalize(b.price) > normalize(a.price)) {
                return 1;
              }
              return 0;
            });
            console.log(action.payload)
            console.log(sortedArrPrice)
      return {
        ...state,
        cars: [...sortedArrPrice]
      };
    case ORDER_CARS_KM:
      let sortedArrKM =
        action.payload === "maykm"
          ? state.cars.sort(function (a, b) {
              if (a.kilometers > b.kilometers) {
                return 1;
              }
              if (b.kilometers > a.kilometers) {
                return -1;
              }
              return 0;
            })
          : state.cars.sort(function (a, b) {
              if (a.kilometers > b.kilometers) {
                return -1;
              }
              if (b.kilometers > a.kilometers) {
                return 1;
              }
              return 0;
            });
            return {
        ...state,
        cars: [...sortedArrKM],
      };
    case GET_CARS_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case ADD_FAVORITE: {
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
        };
    }
    case REMOVE_FAVORITE: {
      const user = action.payload.userId;
      const car = action.payload.carId;
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [user || "invitado"]: state.favorites[user].filter((p) => p !== car),
        },
      };
    }

    case CLEAN_STATE:
      return {
        ...state,
        detail: {},
      };
    case POST_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case LOADING_ACTION: {
      const loading = state.loading;
      if (loading === true) {
        return {
          ...state,
          loading: false,
        };
      } else {
        return {
          ...state,
          loading: true,
        };
      }
    }
    case ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        usersDetails: action.payload,
      };

    case ADD_TO_PUBLICATIONS:
      const cars = [...state.cars]
     const res =  cars.filter(c=>{
        if(c.carId===action.payload){
          return c
        }
      })
      return{
        ...state,
        publications:state.publications.concat()
      }

    default:
      return state;
  }

}

export default Reducer;
