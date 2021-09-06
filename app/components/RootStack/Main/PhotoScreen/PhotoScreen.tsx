import React, {useEffect, useState, useContext, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import {IApiData, UserDrawerParamsList} from '../../../interface';
import {
  COLORS,
  COLOR_ACTIVITY_INDICATOR,
  PHOTO_HEIGHT,
  SCREENS,
} from '../../../constants/constants';
import {ThemeContext} from '../../../context/ThemeContext';
import {useDispatch, useSelector} from 'react-redux';
import {
  addSearchValue,
  onClearPhotoData,
  startRequest,
} from '../../../../store/action/photosAction';
import {IAppState} from '../../../../store/types';
import MasonryList from '@react-native-seoul/masonry-list';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<
  UserDrawerParamsList,
  SCREENS.photos | SCREENS.topPhotos | SCREENS.newPhotos
>;

export const PhotoScreen: React.FC<Props> = ({route}: Props) => {
  const {photoData, isError, isLoading, searchValue} = useSelector(
    (state: IAppState) => state.photosReducer,
  );

  const [page, setPage] = useState<number>(1);

  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);

  const navigation =
    useNavigation<
      NavigationProp<UserDrawerParamsList, SCREENS.selectedPhoto>
    >();

  const dispatch = useDispatch();

  const {colors} = useContext(ThemeContext);

  const bgColor = {backgroundColor: colors.background};

  const getPhotos = useCallback(
    (value: string, numPage: number, searchedValue: string = '') =>
      dispatch(startRequest(value, numPage, searchedValue)),
    [dispatch],
  );

  const onRefresh = () => {
    dispatch(onClearPhotoData());
    setPage(1);
    getPhotos(route.name, page);
  };

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum) {
      setPage(page + 1);
      setOnEndReachedCalledDuringMomentum(true);
    }
  };

  const onMomentumScrollBegin = () =>
    setOnEndReachedCalledDuringMomentum(false);

  useEffect(() => {
    dispatch(onClearPhotoData());
  }, [dispatch, route.name]);

  useEffect(() => {
    getPhotos(route.name, page, searchValue);
  }, [searchValue, getPhotos, page, route.name]);

  useEffect(() => {
    return () => {
      dispatch(addSearchValue());
    };
  }, [dispatch]);

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

  const renderView = (
    <View style={[styles.masonry, bgColor]}>
      <MasonryList
        contentContainerStyle={bgColor}
        data={photoData}
        numColumns={2}
        renderItem={renderItem}
        onEndReached={onEndReached}
        refreshing={isLoading}
        onRefresh={onRefresh}
        onMomentumScrollBegin={onMomentumScrollBegin}
      />
      {isLoading && (
        <View style={[styles.indicatorWrapper, bgColor]}>
          <ActivityIndicator size="large" color={COLOR_ACTIVITY_INDICATOR} />
        </View>
      )}
    </View>
  );

  return !isError ? (
    renderView
  ) : (
    <View>
      <Text>Some Error</Text>
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
