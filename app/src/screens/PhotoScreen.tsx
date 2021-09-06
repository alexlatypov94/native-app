import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {UserDrawerParamsList} from '../interfaces/interfaces';
import {SCREENS} from '../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {addSearchValue, onClearPhotoData} from '../store/action/photosAction';
import {IAppState} from '../store/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PhotoList} from '../shared/PhotoList';

type Props = NativeStackScreenProps<
  UserDrawerParamsList,
  SCREENS.photos | SCREENS.topPhotos | SCREENS.newPhotos
>;

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
