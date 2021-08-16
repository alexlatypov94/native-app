import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';

export const BurgerMenu: React.FC = () => {
  return (
    <View style={styles.burgerWrapper}>
      <View>
        <Text>QWERTY</Text>
        <Text>QWERTY</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  burgerWrapper: {
    backgroundColor: 'red',
  },
});
