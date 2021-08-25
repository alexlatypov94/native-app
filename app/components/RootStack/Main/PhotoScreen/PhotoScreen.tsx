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
  COLOR_ACTIVITY_INDICATOR,
  PHOTO_HEIGHT,
  SCREENS,
} from '../../../constants/constants';
import {ThemeContext} from '../../../context/ThemeContext';
import {useDispatch, useSelector} from 'react-redux';
import {startRequest} from '../../../../store/action/photosAction';
import {IAppState} from '../../../../store/types';
import MasonryList from '@react-native-seoul/masonry-list';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const PhotoScreen: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const {photoData, isError, isLoading} = useSelector(
    (state: IAppState) => state.photosReducer,
  );

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

  const getPhotos = useCallback(() => dispatch(startRequest()), [dispatch]);

  const onRefresh = () => {
    setIsRefreshing(true);
    wait(2000).then(() => {
      setIsRefreshing(false);
    });
  };

  const moveToPhotoPage = (id: string) =>
    navigation.navigate(SCREENS.selectedPhoto, {photoId: id});

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum) {
      getPhotos();
      setOnEndReachedCalledDuringMomentum(true);
    }
  };

  const onMomentumScrollBegin = () =>
    setOnEndReachedCalledDuringMomentum(false);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  const renderItem = ({item, i}: {item: IApiData; i: number}) => {
    const heightImg = i % 2 !== 0 ? PHOTO_HEIGHT.large : PHOTO_HEIGHT.small;

    return (
      <View style={styles.imgWrapperStyle} key={item.id + i}>
        <TouchableHighlight
          onPress={() => moveToPhotoPage(item.id)}
          underlayColor="#fff"
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
    <View style={[styles.masonry, {...bgColor}]}>
      <MasonryList
        contentContainerStyle={{...bgColor}}
        data={photoData}
        numColumns={2}
        renderItem={renderItem}
        onEndReached={onEndReached}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        onEndReachedThreshold={0.5}
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
