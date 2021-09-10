import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  startWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    flex: 1,
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
