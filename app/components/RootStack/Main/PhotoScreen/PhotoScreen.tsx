import React, {useEffect, useState, useContext, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {IApiData} from '../../../interface';
import {
  COLOR_ACTIVITY_INDICATOR,
  PHOTO_HEIGHT,
} from '../../../constants/constants';
import {ThemeContext} from '../../../context/ThemeContext';
import {splitPhotoArray} from '../../../utils/splitPhotoArray';
import {useDispatch, useSelector} from 'react-redux';
import {startRequest} from '../../../../store/action/photosAction';
import {IAppState} from '../../../../store/types';
import MasonryList from '@react-native-seoul/masonry-list';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const renderItem = ({item, i}: {item: IApiData; i: number}) => {
  const heightImg = i % 2 !== 0 ? PHOTO_HEIGHT.large : PHOTO_HEIGHT.small;

  return (
    <Image
      key={item.id + i}
      style={styles.imgStyle}
      source={{
        uri: item?.urls?.regular,
        height: heightImg,
      }}
    />
  );
};

export const PhotoScreen: React.FC = () => {
  const [photos, setPhotos] = useState<{
    even: Array<IApiData>;
    odd: Array<IApiData>;
  }>({even: [], odd: []});
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const {photoData, isError, isLoading} = useSelector(
    (state: IAppState) => state.photosReducer,
  );

  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);

  const dispatch = useDispatch();

  const {colors} = useContext(ThemeContext);

  const bgColor = {backgroundColor: colors.background};

  const onRefresh = () => {
    setIsRefreshing(true);
    wait(2000).then(() => {
      setIsRefreshing(false);
    });
  };

  const getPhotos = useCallback(() => dispatch(startRequest()), [dispatch]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

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

  useEffect(() => {
    const photoObj = splitPhotoArray(photoData);
    console.log(photoObj);
    setPhotos(photoObj);
  }, [photoData]);

  console.log(isError);

  const renderView = (
    <View style={styles.masonry}>
      <MasonryList
        contentContainerStyle={{...bgColor}}
        data={photoData}
        numColumns={2}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.4}
        refreshing={isRefreshing}
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
    margin: 10,
  },

  indicatorWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
