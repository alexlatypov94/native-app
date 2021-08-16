import React from 'react';
import {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';

export const SettingsScreen: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={styles.settingsWrapper}>
      <Text style={styles.settingsTitle}>Settings</Text>
      <View style={styles.settingsItem}>
        <Text style={styles.changeThemeTitle}>Change theme</Text>
        <Switch
          trackColor={{false: '#fff', true: '#000'}}
          thumbColor={isEnabled ? '#fff' : '#1b66ac'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsWrapper: {
    flex: 1,
    backgroundColor: '#1F2126',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsTitle: {
    fontSize: 30,
    color: '#fff',
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
    color: '#fff',
  },
});
