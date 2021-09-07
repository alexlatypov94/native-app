import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    fontSize: 20,
    width: '80%',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  btnStyle: {
    width: '80%',
  },
  touchContainer: {
    marginVertical: 20,
  },
  moveRegStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width - 100,
    padding: 10,
  },
  touchRadius: {
    borderRadius: 10,
  },
  invalidEmail: {
    color: 'red',
    fontSize: 18,
  },
});
