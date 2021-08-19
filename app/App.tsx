/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StartScreen} from './components/Main/StartScreen/StartScreen';
import {PhotoScreen} from './components/Main/PhotoScreen/PhotoScreen';
import {SCREENS} from './components/constants/constants';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.wrapper}>
        <Header />
        <View style={styles.main}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={SCREENS.start} component={StartScreen} />
            <Stack.Screen name={SCREENS.photos} component={PhotoScreen} />
          </Stack.Navigator>
        </View>
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  main: {
    flex: 15,
  },
});

export default App;
