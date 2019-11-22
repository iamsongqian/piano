import  reducer  from "./reducerRedux"
import { createStore, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
	key: "root",
	storage,
}
let composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const myPersistReducer = persistReducer(persistConfig, reducer)

export const store = createStore(myPersistReducer, composeEnhancers())
export const persistor = persistStore(store)

