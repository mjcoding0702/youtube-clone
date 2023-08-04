import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import videoReducer from './features/videoSlice'; // Import the video reducer
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    video: videoReducer, 
  },
});

export const persistor = persistStore(store);
