import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, TouchableHighlight, View, FlatList} from 'react-native';
import {SCREENS, USER_MENU_ITEMS} from '../../constants/constants';
import {IUserMenuItem} from '../../constants/interfaces';
import {ThemeContext} from '../../context/ThemeContext';
import {UserDrawerParamsList} from '../../interface';

export const UserMenu: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<UserDrawerParamsList, SCREENS>>();
  const handlePress = (screenName: SCREENS) => {
    navigation.navigate(screenName);
  };
  const {colors} = useContext(ThemeContext);

  const bgColor = {backgroundColor: colors.background};

  const keyExtractor = (item: IUserMenuItem): string => item.screen;

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
    <View style={[styles.footer, bgColor]}>
      <FlatList
        contentContainerStyle={styles.flatListStyles}
        horizontal={true}
        data={USER_MENU_ITEMS}
        keyExtractor={keyExtractor}
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
