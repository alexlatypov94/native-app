import {useNetInfo} from '@react-native-community/netinfo';
import MasonryList from '@react-native-seoul/masonry-list';
import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PhotoCard} from '../../components';

import {ThemeContext} from '../../context/ThemeContext';
import {IApiData} from '../../interfaces/interfaces';
import {getPhotoFromDBRequestStart} from '../../store/action/likedPhotoActions';
import {IAppState} from '../../store/types';

export const LikedPhotoScreen: React.FC = () => {
  const {likedPhotoData} = useSelector(
    (state: IAppState) => state.likedPhotoReducer,
  );
  const {id} = useSelector((store: IAppState) => store.authReducer);
  const {isConnected} = useNetInfo();

  const {colors} = useContext(ThemeContext);
  const dispatch = useDispatch();
  const bgColor = {backgroundColor: colors.background};

  useEffect(() => {
    if (isConnected) {
      dispatch(getPhotoFromDBRequestStart(id));
    }
  }, [dispatch, id, isConnected]);

  const renderItem = ({item, i}: {item: IApiData; i: number}) => (
    <PhotoCard item={item} index={i} key={item.id + i} />
  );

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
