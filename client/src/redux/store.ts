import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from './reducers/userSlice'
import { persistReducer, persistStore, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    user: UserSlice
})

const persistedReducer = persistReducer({ key: 'root', version: 1, storage }, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [REHYDRATE]
            }
        })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store