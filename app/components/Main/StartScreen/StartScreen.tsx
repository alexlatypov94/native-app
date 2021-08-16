import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {SCREENS} from '../../constants/constants';
import {UserStackParamsList} from '../../interface';

export const StartScreen: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<UserStackParamsList, SCREENS.photos>>();

  const handleNavigation = () => {
    navigation.navigate(SCREENS.photos);
  };

  return (
    <View style={styles.startWrapper}>
      <TouchableWithoutFeedback onPress={handleNavigation}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Welcome</Text>
          <View style={styles.roundWave} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  startWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2126',
  },
  buttonStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
  },
  roundWave: {
    position: 'absolute',
    zIndex: 0,
    width: 50,
    height: 50,
    backgroundColor: '#595C62',
    borderRadius: 50,
  },
});
