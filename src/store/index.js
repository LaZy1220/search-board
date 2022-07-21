import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { devToolsEnhancer } from "redux-devtools-extension";

const persistConfig = {
    key:'root',
    storage,
    //whitelist:[],
    //blacklist:[],
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = createStore(persistedReducer,devToolsEnhancer())
export const persistor = persistStore(store)