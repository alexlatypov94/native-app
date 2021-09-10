import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
  },
  bgImage: {
    zIndex: 100,
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 50,
  },
  touchWrapper: {
    width: 130,
    height: 130,
    backgroundColor: 'red',
    zIndex: 10,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchRadius: {
    borderRadius: 75,
  },
  textBtn: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});
