import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    fontSize: 20,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
  },
  invalidEmail: {
    color: 'red',
    fontSize: 18,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});
