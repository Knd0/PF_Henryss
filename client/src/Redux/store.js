/* import { createStore, applyMiddleware, compose } from 'redux';
import{composeWithDevTools} from "redux-devtools-extension"
import rootReducer from './reducer';
import thunk from "redux-thunk";

export const store = createStore(rootReducer,
    composeWithDevTools(
       applyMiddleware(thunk)
         // la librería redux-devtools-extension tiene composeWithDevTools
       )                                                                             //
   );

 */

   import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducer"

export const store = createStore(rootReducer, applyMiddleware(thunk))
