import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addSearchValue,
  onClearPhotoData,
} from '../../store/action/photosAction';
import {IAppState} from '../../store/types';
import {PhotoList} from '../../components';
import {Props} from './types';

export const PhotoScreen: React.FC<Props> = ({route}: Props) => {
  const {isError} = useSelector((state: IAppState) => state.photosReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onClearPhotoData());
  }, [dispatch, route.name]);

  useEffect(() => {
    return () => {
      dispatch(addSearchValue());
    };
  }, [dispatch]);

  return !isError ? (
    <PhotoList routeName={route.name} />
  ) : (
    <View>
      <Text>Some Error</Text>
    </View>
  );
};
