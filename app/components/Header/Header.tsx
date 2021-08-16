import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AvatarSvg} from '../../assets/svg/AvatarSvg';
import {FilterSvg} from '../../assets/svg/FilterSvg';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <AvatarSvg />
      <Text style={styles.headerText}>My Studio</Text>
      <FilterSvg />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#1F2126',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
