import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducer/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import {watcher} from './saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saga = createSagaMiddleware();

type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['likedPhotoReducer', 'authReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(saga));

saga.run(watcher);

export const persistor = persistStore(store);
