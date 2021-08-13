import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#1F2126',
  },
});
