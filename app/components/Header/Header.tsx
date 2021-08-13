import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My Studio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#1F2126',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
