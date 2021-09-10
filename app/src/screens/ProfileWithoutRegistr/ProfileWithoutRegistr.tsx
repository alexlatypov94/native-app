import React from 'react';
import {ImageBackground, Text, View, TouchableHighlight} from 'react-native';
import {styles} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import {SCREENS} from '../../constants/constants';
import {UserDrawerParamsList} from '../../interfaces/interfaces';

export const ProfileWithoutRegistr: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<UserDrawerParamsList, SCREENS.auth>>();

  const handlePress = () => {
    navigation.navigate(SCREENS.auth);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://dp.vgorode.ua/img/article/11072/87_main-v1584435978.jpg',
      }}
      style={styles.bgImage}
      resizeMode="cover">
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Hi, you are using the application without authorization, quickly log
          in
        </Text>
        <TouchableHighlight
          onPress={handlePress}
          underlayColor="#fff"
          style={styles.touchRadius}>
          <View style={styles.touchWrapper}>
            <Text style={styles.textBtn}>Log in</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
};
