import React, {useEffect, useState, useContext, useCallback} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {IApiData} from '../../../interface';
import {
  COLOR_ACTIVITY_INDICATOR,
  PHOTO_HEIGHT,
} from '../../../constants/constants';
import {ThemeContext} from '../../../context/ThemeContext';
import {MyScrollView} from '../../../MyScrollView/MyScrollView';
import {splitPhotoArray} from '../../../utils/splitPhotoArray';
import {useDispatch, useSelector} from 'react-redux';
import {startRequest} from '../../../../store/action/photosAction';
import {IAppState} from '../../../../store/types';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const renderItem = ({item}: {item: IApiData}) => {
  const heightImg =
    item.idColumn === 'odd' ? PHOTO_HEIGHT.large : PHOTO_HEIGHT.small;

  return (
    <Image
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
  const dispatch = useDispatch();

  const {colors} = useContext(ThemeContext);

  const bgColor = {backgroundColor: colors.background};

  const onRefresh = () => {
    setIsRefreshing(true);
    wait(2000).then(() => {
      setIsRefreshing(false);
    });
  };

  const keyExtractor = (item: IApiData, index: number) => item.id + index;

  const getPhotos = useCallback(() => dispatch(startRequest()), [dispatch]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  useEffect(() => {
    const photoObj = splitPhotoArray(photoData);
    setPhotos(photoObj);
  }, [photoData]);

  console.log(isError);

  const renderView = (
    <MyScrollView isRefreshing={isRefreshing} onRefresh={onRefresh}>
      <View style={[styles.scrollWrapper, bgColor]}>
        <View style={styles.firstColumn}>
          <FlatList
            data={photos?.even}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            scrollEnabled={false}
            listKey="first"
          />
        </View>
        <View style={styles.secondColumn}>
          <FlatList
            data={photos?.odd}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            scrollEnabled={false}
            listKey="second"
          />
        </View>
      </View>
    </MyScrollView>
  );

  const renderIsloading = !isLoading ? (
    renderView
  ) : (
    <View style={[styles.indicatorWrapper, bgColor]}>
      <ActivityIndicator size="large" color={COLOR_ACTIVITY_INDICATOR} />
    </View>
  );

  return !isError ? (
    renderIsloading
  ) : (
    <View>
      <Text>Some Error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollWrapper: {
    position: 'relative',
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgStyle: {
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
    margin: 10,
  },

  firstColumn: {
    width: Dimensions.get('window').width / 2,
    position: 'relative',
    alignItems: 'center',
  },
  secondColumn: {
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
  },

  indicatorWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});
