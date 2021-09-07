import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducer/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalWatcher} from './saga/sagaFork';

const saga = createSagaMiddleware();

type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['photoData', 'authReducer'],
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(saga));

saga.run(globalWatcher);

export const persistor = persistStore(store);
