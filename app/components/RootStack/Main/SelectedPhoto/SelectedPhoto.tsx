import React, {useContext, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeContext} from '../../../context/ThemeContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SCREENS} from '../../../constants/constants';
import {IApiData, UserDrawerParamsList} from '../../../interface';
import {IAppState} from '../../../../store/types';
import {LinkComponent} from '../../../LinkComponent/LinkComponent';
import {addLikedPhoto} from '../../../../store/action/likedPhotoActions';

type Props = NativeStackScreenProps<
  UserDrawerParamsList,
  SCREENS.selectedPhoto
>;

export const SelectedPhoto: React.FC<Props> = React.memo(({route}: Props) => {
  const {photoId} = route.params;
  const {colors} = useContext(ThemeContext);
  const photoData = useSelector((store: IAppState) =>
    store.photosReducer.photoData.find(el => el?.id === photoId),
  );

  const storage = useSelector(
    (state: IAppState) => state.likedPhotoReducer.likedPhotoData,
  );
  const isLiked = storage?.find((el: IApiData) => el?.id === photoId);

  const [isTouchable, setIsTouchable] = useState(false);

  const instagramUrl = `https://www.instagram.com/${photoData?.user.social.instagram_username}`;
  const twitterUrl = `https://twitter.com/${photoData?.user.social.twitter_username}`;
  const portfolioUrl = photoData?.user.social.portfolio_url as string;

  const bgColor = {backgroundColor: colors.background};
  const textColor = {color: colors.text};

  const imgSource = {
    uri: photoData?.urls.regular,
    height: Dimensions.get('window').height / 2,
  };

  const dispatch = useDispatch();

  const handleTouch = () => {
    setIsTouchable(!isTouchable);
    dispatch(addLikedPhoto(photoData as IApiData, !isTouchable));
  };

  return (
    <ScrollView style={[styles.container, bgColor]}>
      <View style={styles.wrapper}>
        <View style={[styles.imgWrapper]}>
          <Image source={imgSource} resizeMode="cover" />
        </View>
        <View>
          <Text style={[styles.textStyle, textColor]}>
            {photoData?.description ||
              photoData?.alt_description ||
              'no description'}
          </Text>
        </View>
        <View style={styles.iconsWrapper}>
          <TouchableOpacity onPress={handleTouch}>
            {isLiked?.liked_by_user ? (
              <MaterialCommunityIcons name="heart" color="#e63b3b" size={44} />
            ) : (
              <MaterialCommunityIcons
                name="heart-outline"
                color="#fff"
                size={44}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.photographerInfo}>
          <Text style={textColor}>{`Created by: ${photoData?.user.name}`}</Text>
        </View>
      </View>
      <View style={styles.authorSocial}>
        <LinkComponent url={instagramUrl} icon="instagram" />
        <LinkComponent url={twitterUrl} icon="twitter" />
        <LinkComponent url={portfolioUrl} icon="briefcase" />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 10,
  },
  imgWrapper: {
    marginBottom: 10,
    borderRadius: 40,
    overflow: 'hidden',
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
  photographerInfo: {
    marginVertical: 10,
    alignItems: 'center',
  },
  iconsWrapper: {
    paddingHorizontal: 20,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  authorSocial: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
