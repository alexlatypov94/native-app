import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  profileWrapper: {
    flex: 1,
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  userName: {
    fontSize: 24,
    marginTop: 20,
  },
  profileTitle: {
    fontSize: 30,
    marginBottom: 20,
  },
  singOutContainer: {
    width: '80%',
    marginTop: 20,
  },
  signOutBtn: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  avatarStyles: {
    borderRadius: 100,
  },
});
