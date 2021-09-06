import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import {
  ANIMATION_DURATION,
  ANIMATION_SCALE_END_VALUE,
  SCREENS,
} from '../constants/constants';
import {ThemeContext} from '../context/ThemeContext';
import {UserDrawerParamsList} from '../interfaces/interfaces';

export const StartScreen: React.FC = () => {
  const navigation =
    useNavigation<
      NavigationProp<UserDrawerParamsList, SCREENS.dispatcherScreen>
    >();

  const [startValueScale] = useState(new Animated.Value(0));
  const [startValueOpacity] = useState(new Animated.Value(1));

  const runAnimation = useCallback(() => {
    Animated.parallel([
      Animated.loop(
        Animated.timing(startValueScale, {
          toValue: ANIMATION_SCALE_END_VALUE,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ),
      Animated.loop(
        Animated.timing(startValueOpacity, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ),
    ]).start();
  }, [startValueScale, startValueOpacity]);

  useEffect(() => {
    runAnimation();
  }, [runAnimation]);

  const handleNavigation = () => {
    navigation.navigate(SCREENS.dispatcherScreen);
  };

  const {colors} = useContext(ThemeContext);

  const bgColor = {backgroundColor: colors.background};
  const textColor = {color: colors.text};
  const animateStyle = {
    transform: [
      {
        scale: startValueScale,
      },
    ],
    opacity: startValueOpacity,
  };

  return (
    <View style={[styles.startWrapper, bgColor]}>
      <TouchableWithoutFeedback onPress={handleNavigation}>
        <View style={styles.buttonStyle}>
          <Text style={[styles.buttonTextStyle, textColor]}>Welcome</Text>
          <Animated.View style={[styles.roundWave, animateStyle]} />
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
    zIndex: 100,
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
