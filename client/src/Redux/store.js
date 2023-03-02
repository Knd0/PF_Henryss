import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import Reducer from "./reducer";
import { saveState } from "./LocalStorage";
import { persistStore, persistReducer } from 'redux-persist5';;
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const newReducer = persistReducer(persistConfig, Reducer);

export const store = createStore(
  newReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

store.subscribe(() => {
  saveState(store.getState());
});
