import React, {useContext, useEffect, useState} from 'react';
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
import {
  COLORS,
  ICONS_NAME,
  MATERIAL_ICON_SIZES,
  SCREENS,
} from '../../../constants/constants';
import {IApiData, UserDrawerParamsList} from '../../../interface';
import {IAppState} from '../../../../store/types';
import {LinkComponent} from '../../../LinkComponent/LinkComponent';
import {addLikedPhoto} from '../../../../store/action/likedPhotoActions';
import {addPhotoToDataBase, removePhotoFromDatabase} from '../../../utils';

type Props = NativeStackScreenProps<
  UserDrawerParamsList,
  SCREENS.selectedPhoto
>;

export const SelectedPhoto: React.FC<Props> = React.memo(({route}: Props) => {
  const {colors} = useContext(ThemeContext);
  const bgColor = {backgroundColor: colors.background};
  const textColor = {color: colors.text};
  const {photoData} = route.params;

  const instagramUrl = `https://www.instagram.com/${photoData?.user.social.instagram_username}`;
  const twitterUrl = `https://twitter.com/${photoData?.user.social.twitter_username}`;
  const portfolioUrl = photoData?.user.social.portfolio_url as string;

  const imgSource = {
    uri: photoData?.urls.regular,
    height: Dimensions.get('window').height / 2,
  };

  const {id} = useSelector((store: IAppState) => store.authReducer);

  const storage = useSelector(
    (store: IAppState) => store.likedPhotoReducer.likedPhotoData,
  );

  console.log(storage);

  const isLiked = storage.find((el: IApiData) => photoData.id === el.id);

  const [isTouchable, setIsTouchable] = useState(isLiked?.liked_by_user);

  const dispatch = useDispatch();

  const addOrRemovePhotoInDB = (isTouch: boolean) => {
    if (isTouch) {
      addPhotoToDataBase({...photoData, liked_by_user: isTouch}, id);
    } else {
      removePhotoFromDatabase({...photoData, liked_by_user: !isTouch}, id);
    }
  };

  const handleTouch = () => {
    console.log(isTouchable);
    setIsTouchable(!isTouchable);
    addOrRemovePhotoInDB(!isTouchable);
    dispatch(addLikedPhoto(photoData as IApiData, !isTouchable));
  };

  useEffect(() => {
    setIsTouchable(!!isLiked?.liked_by_user);
  }, [photoData.liked_by_user, photoData, isLiked?.liked_by_user]);

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
            {isTouchable ? (
              <MaterialCommunityIcons
                name={ICONS_NAME.heart}
                color={COLORS.redLike}
                size={MATERIAL_ICON_SIZES.large}
              />
            ) : (
              <MaterialCommunityIcons
                name={ICONS_NAME.heart_outline}
                color={COLORS.white}
                size={MATERIAL_ICON_SIZES.large}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.photographerInfo}>
          <Text style={textColor}>{`Created by: ${photoData?.user.name}`}</Text>
        </View>
      </View>
      <View style={styles.authorSocial}>
        <LinkComponent url={instagramUrl} icon={ICONS_NAME.instagram} />
        <LinkComponent url={twitterUrl} icon={ICONS_NAME.twitter} />
        <LinkComponent url={portfolioUrl} icon={ICONS_NAME.briefcase} />
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
