import { configureStore} from "@reduxjs/toolkit";
import { filterReducer } from "./components/features/filter/filter-slice";
import { positionReducer } from "./components/features/positions/position-slice";
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    filters:filterReducer,
    positions:positionReducer,
})

const persistConfig = {
    key:'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    devTools:true,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
            ]
        }
    })
});

export const persistor = persistStore(store)    