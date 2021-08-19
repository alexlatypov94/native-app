import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {useContext} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SCREENS, USER_MENU_ITEMS} from '../constants/constants';
import {IUserMenuItem} from '../constants/interfaces';
import {ThemeContext} from '../context/ThemeContext';
import {UserDrawerParamsList} from '../interface';

export const UserMenu: React.FC = () => {
  const navigations =
    useNavigation<NavigationProp<UserDrawerParamsList, SCREENS>>();
  const handlePress = (screenName: string) => {
    // I don't know how to fix it(

    navigations.navigate(screenName);
  };

  const {colors} = useContext(ThemeContext);

  const renderUserItems = ({item}: {item: IUserMenuItem}) => {
    return (
      <TouchableHighlight
        underlayColor="#c7c7c74b"
        onPress={() => handlePress(item.screen)}
        style={styles.touchableRadius}>
        <View style={styles.userBtnStyles}>{item.icon()}</View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={[styles.footer, {backgroundColor: colors.background}]}>
      <FlatList
        contentContainerStyle={styles.flatListStyles}
        horizontal={true}
        data={USER_MENU_ITEMS}
        keyExtractor={i => i.screen}
        renderItem={renderUserItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 2,
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
