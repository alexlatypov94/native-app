import React from 'react';
import {useContext} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {ThemeContext} from '../../context/ThemeContext';

export const SettingsScreen: React.FC = () => {
  const {colors, isDark, setColorScheme} = useContext(ThemeContext);

  const toggleSwitch = (isTrue: boolean) => {
    setColorScheme(isTrue ? 'dark' : 'light');
  };

  return (
    <View
      style={[styles.settingsWrapper, {backgroundColor: colors.background}]}>
      <Text style={[styles.settingsTitle, {color: colors.text}]}>Settings</Text>
      <View style={styles.settingsItem}>
        <Text style={[styles.changeThemeTitle, {color: colors.text}]}>
          Change theme
        </Text>
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
