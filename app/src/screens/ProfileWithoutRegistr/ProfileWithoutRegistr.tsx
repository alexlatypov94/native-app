import React from 'react';
import {ImageBackground, Text, View, TouchableHighlight} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {returnToReg} from '../../store/action/authAction';

export const ProfileWithoutRegistr: React.FC = () => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(returnToReg());
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
