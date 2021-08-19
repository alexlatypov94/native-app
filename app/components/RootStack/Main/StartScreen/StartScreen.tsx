import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {useContext} from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {SCREENS} from '../../../constants/constants';
import {ThemeContext} from '../../../context/ThemeContext';
import {UserDrawerParamsList} from '../../../interface';

export const StartScreen: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<UserDrawerParamsList, SCREENS.photos>>();

  const handleNavigation = () => {
    navigation.navigate(SCREENS.photos);
  };

  const {colors} = useContext(ThemeContext);

  return (
    <View style={[styles.startWrapper, {backgroundColor: colors.background}]}>
      <TouchableWithoutFeedback onPress={handleNavigation}>
        <View style={styles.buttonStyle}>
          <Text style={[styles.buttonTextStyle, {color: colors.text}]}>
            Welcome
          </Text>
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
