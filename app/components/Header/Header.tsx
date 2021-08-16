import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {HEADER_ITEMS} from '../constants/constants';

export const Header: React.FC = () => {
  const headerItems = Object.entries(HEADER_ITEMS);
  const navigations = useNavigation();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handlePress = (screenName: string) => {
    if (screenName === 'menu') {
      setIsOpenDrawer(!isOpenDrawer);
      return isOpenDrawer
        ? navigations.dispatch(DrawerActions.closeDrawer())
        : navigations.dispatch(DrawerActions.openDrawer());
    }
  };

  const renderHeaderItems = ({item}: any) => {
    const [screenRef, itemSvg] = item;

    return typeof itemSvg !== 'string' ? (
      <TouchableHighlight
        underlayColor="#c7c7c74b"
        onPress={() => handlePress(screenRef)}
        style={styles.touchableRadius}>
        <View style={styles.userBtnStyles}>{itemSvg()}</View>
      </TouchableHighlight>
    ) : (
      <Text style={styles.headerText}>{itemSvg}</Text>
    );
  };
  return (
    <View style={styles.header}>
      <FlatList
        contentContainerStyle={styles.flatListStyles}
        horizontal={true}
        data={headerItems}
        keyExtractor={i => i}
        renderItem={renderHeaderItems}
      />
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
    padding: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  touchableRadius: {
    borderRadius: 20,
  },
  flatListStyles: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userBtnStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    width: 40,
    height: 40,
  },
});
