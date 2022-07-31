import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/dataReducer';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
    counter: counterReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
  
export const persistor = persistStore(store)