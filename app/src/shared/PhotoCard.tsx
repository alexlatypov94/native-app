import React from 'react';
import {
  View,
  TouchableHighlight,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {COLORS, PHOTO_HEIGHT, SCREENS} from '../constants/constants';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import {IApiData, UserDrawerParamsList} from '../interfaces/interfaces';

interface IPhotoCardProp {
  item: IApiData;
  index: number;
}

export const PhotoCard: React.FC<IPhotoCardProp> = React.memo(
  ({item, index}: IPhotoCardProp) => {
    const heightImg = index % 2 !== 0 ? PHOTO_HEIGHT.large : PHOTO_HEIGHT.small;

    const navigation =
      useNavigation<
        NavigationProp<UserDrawerParamsList, SCREENS.selectedPhoto>
      >();

    const moveToPhotoPage = () => {
      navigation.navigate(SCREENS.selectedPhoto, {photoData: item});
    };

    return (
      <View style={styles.imgWrapperStyle}>
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
  },
);

const styles = StyleSheet.create({
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

  imgWrapperStyle: {
    margin: 10,
    alignItems: 'center',
  },
  touchableBorder: {
    borderRadius: 10,
  },
});
