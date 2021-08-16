import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AvatarSvg} from '../../assets/svg/AvatarSvg';
import {GallerySvg} from '../../assets/svg/GallerySvg';
import {HomeSvg} from '../../assets/svg/HomeSvg';
import {SettingsSvg} from '../../assets/svg/SettingsSvg';

export const Footer: React.FC = () => {
  console.log('footer');
  return (
    <View style={styles.footer}>
      <HomeSvg />
      <GallerySvg />
      <AvatarSvg />
      <SettingsSvg />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    backgroundColor: '#1F2126',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
