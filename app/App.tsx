/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import AppRoot from './components/AppRoot';

const App = () => {
  console.log('called APP');
  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  );
};

export default App;
