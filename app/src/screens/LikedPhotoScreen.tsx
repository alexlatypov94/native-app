import {useNetInfo} from '@react-native-community/netinfo';
import MasonryList from '@react-native-seoul/masonry-list';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPhotoFromDBRequestStart} from '../store/action/likedPhotoActions';
import {IAppState} from '../store/types';
import {COLORS, PHOTO_HEIGHT, SCREENS} from '../constants/constants';
import {ThemeContext} from '../context/ThemeContext';
import {IApiData, UserDrawerParamsList} from '../interfaces/interfaces';

export const LikedPhotoScreen: React.FC = () => {
  const {likedPhotoData} = useSelector(
    (state: IAppState) => state.likedPhotoReducer,
  );
  const {id} = useSelector((store: IAppState) => store.authReducer);
  const {isConnected} = useNetInfo();
  const navigation =
    useNavigation<NavigationProp<UserDrawerParamsList, SCREENS>>();

  const {colors} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const bgColor = {backgroundColor: colors.background};

  useEffect(() => {
    if (isConnected) {
      dispatch(getPhotoFromDBRequestStart(id));
    }
  }, [dispatch, id, isConnected]);

  const renderItem = ({item, i}: {item: IApiData; i: number}) => {
    const heightImg = i % 2 !== 0 ? PHOTO_HEIGHT.large : PHOTO_HEIGHT.small;
    const moveToPhotoPage = () => {
      navigation.navigate(SCREENS.selectedPhoto, {photoData: item});
    };

    return (
      <View style={styles.imgWrapperStyle} key={item.id + i}>
        <TouchableHighlight
          onPress={moveToPhotoPage}
          underlayColor={COLORS.white}
          style={styles.touchableBorder}>
          <Image
            style={styles.imgStyle}
            source={{
              uri: item?.urls?.regular,
              height: heightImg,
            }}
          />
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View style={[styles.masonry, bgColor]}>
      <MasonryList
        data={likedPhotoData}
        renderItem={renderItem}
        contentContainerStyle={bgColor}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  masonry: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollWrapper: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
    overflow: 'hidden',
  },

  indicatorWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },

  imgWrapperStyle: {
    margin: 10,
    alignItems: 'center',
  },
  touchableBorder: {
    borderRadius: 10,
  },
});
