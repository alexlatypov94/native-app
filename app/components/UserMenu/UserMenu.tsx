import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SCREENS, USER_MENU_ITEMS} from '../constants/constants';
import {getKeyValue} from '../utils/getKeyValue';

export const UserMenu: React.FC = () => {
  const userItemsToArray = Object.entries(USER_MENU_ITEMS);
  const navigations = useNavigation();
  const handlePress = (screenName: string) => {
    const value = getKeyValue(SCREENS, screenName);
    navigations.navigate(value as never);
  };

  const renderUserItems = ({item}: any) => {
    const [screenRef, itemSvg] = item;
    return (
      <TouchableHighlight
        underlayColor="#c7c7c74b"
        onPress={() => handlePress(screenRef)}
        style={styles.touchableRadius}>
        <View style={styles.userBtnStyles}>{itemSvg()}</View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.footer}>
      <FlatList
        contentContainerStyle={styles.flatListStyles}
        horizontal={true}
        data={userItemsToArray}
        keyExtractor={i => i}
        renderItem={renderUserItems}
      />
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
  flatListStyles: {
    width: '100%',
    justifyContent: 'space-around',
  },
  userBtnStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  touchableRadius: {
    borderRadius: 20,
  },
});
