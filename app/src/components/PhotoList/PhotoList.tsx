import MasonryList from '@react-native-seoul/masonry-list';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {onClearPhotoData, startRequest} from '../../store/action/photosAction';
import {IAppState} from '../../store/types';
import {COLOR_ACTIVITY_INDICATOR} from '../../constants/constants';
import {ThemeContext} from '../../context/ThemeContext';
import {IApiData} from '../../interfaces/interfaces';
import {PhotoCard} from '../PhotoCard/PhotoCard';

interface IPhotoListProp {
  routeName: string;
}

export const PhotoList: React.FC<IPhotoListProp> = React.memo(
  ({routeName}: IPhotoListProp) => {
    const {photoData, isLoading, searchValue} = useSelector(
      (state: IAppState) => state.photosReducer,
    );

    const {colors} = useContext(ThemeContext);

    const bgColor = {backgroundColor: colors.background};
    const [
      onEndReachedCalledDuringMomentum,
      setOnEndReachedCalledDuringMomentum,
    ] = useState(true);

    const [page, setPage] = useState<number>(1);

    const dispatch = useDispatch();

    const getPhotos = useCallback(
      (value: string, numPage: number, searchedValue: string = '') =>
        dispatch(startRequest(value, numPage, searchedValue)),
      [dispatch],
    );

    const onRefresh = () => {
      dispatch(onClearPhotoData());
      setPage(1);
      getPhotos(routeName, page);
    };

    const onMomentumScrollBegin = () =>
      setOnEndReachedCalledDuringMomentum(false);

    const onEndReached = () => {
      if (!onEndReachedCalledDuringMomentum) {
        setPage(page + 1);
        setOnEndReachedCalledDuringMomentum(true);
      }
    };

    const renderItem = ({item, i}: {item: IApiData; i: number}) => (
      <PhotoCard item={item} index={i} key={item.id + i} />
    );

    useEffect(() => {
      getPhotos(routeName, page, searchValue);
    }, [searchValue, getPhotos, page, routeName]);

    return (
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
  },
);

const styles = StyleSheet.create({
  masonry: {
    flex: 1,
    justifyContent: 'space-between',
  },
  indicatorWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
