import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  FlatList,
} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {HEADER_ITEMS} from '../constants/constants';
import {ThemeContext} from '../context/ThemeContext';

interface IHeaderProp {
  onChangeVisible: () => void;
}

export const Header: React.FC<IHeaderProp> = ({
  onChangeVisible,
}: IHeaderProp) => {
  const headerItems = Object.entries(HEADER_ITEMS);
  const navigations = useNavigation();
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const {colors} = useContext(ThemeContext);

  const handlePress = (screenName: string) => {
    if (screenName === 'menu') {
      setIsOpenDrawer(!isOpenDrawer);
      return isOpenDrawer
        ? navigations.dispatch(DrawerActions.closeDrawer())
        : navigations.dispatch(DrawerActions.openDrawer());
    }
    if (screenName === 'filter') {
      onChangeVisible();
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
      <Text style={[styles.headerText, {color: colors.text}]}>{itemSvg}</Text>
    );
  };

  return (
    <View style={[styles.header, {backgroundColor: colors.background}]}>
      <FlatList
        contentContainerStyle={styles.flatListStyles}
        horizontal={true}
        data={headerItems}
        keyExtractor={i => i.toString()}
        renderItem={renderHeaderItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerText: {
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
