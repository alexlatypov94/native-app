import React, {useContext} from 'react';
import {Dimensions, StyleSheet, Text, View, Switch} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

export const SettingsScreen: React.FC = () => {
  const {colors, isDark, setColorScheme} = useContext(ThemeContext);

  const toggleSwitch = (isTrue: boolean) => {
    setColorScheme(isTrue ? 'dark' : 'light');
  };

  const bgColor = {backgroundColor: colors.background};
  const textColor = {color: colors.text};

  return (
    <View style={[styles.settingsWrapper, bgColor]}>
      <Text style={[styles.settingsTitle, textColor]}>Settings</Text>
      <View style={styles.settingsItem}>
        <Text style={[styles.changeThemeTitle, textColor]}>Change theme</Text>
        <Switch
          thumbColor={colors.thumb}
          onValueChange={toggleSwitch}
          value={isDark}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsTitle: {
    fontSize: 30,
    marginBottom: 30,
  },
  settingsItem: {
    width: Dimensions.get('window').width / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  changeThemeTitle: {
    fontSize: 20,
  },
});
