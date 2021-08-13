import React from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

interface INavProps {
  navigation: any;
}

export const StartScreen: React.FC<INavProps> = ({navigation}) => {
  return (
    <View style={styles.startWrapper}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Photos')}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Welcome</Text>
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
  startMessage: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonStyle: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    borderRadius: Dimensions.get('window').width / 4,
    backgroundColor: 'red',
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
  },
});
