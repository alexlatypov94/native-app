import React, {useEffect, useState, useCallback, useContext} from 'react';
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
import {getPhotos} from '../../../utils/index';
import {PHOTO_HEIGHT} from '../../../constants/constants';
import {ThemeContext} from '../../../context/ThemeContext';
import {MyScrollView} from '../../../MyScrollView/MyScrollView';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const image = ({item}: {item: IApiData}, isOddColumn: boolean) => {
  return (
    <Image
      style={styles.imgStyle}
      source={{
        uri: item?.urls?.regular,
        height: isOddColumn ? PHOTO_HEIGHT.small : PHOTO_HEIGHT.large,
      }}
    />
  );
};

export const PhotoScreen: React.FC = () => {
  const [photos, setPhotos] = useState<IApiData[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const {colors} = useContext(ThemeContext);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => {
      setIsRefreshing(false);
    });
  }, []);

  useEffect(() => {
    getPhotos()
      .then(res => {
        setPhotos(res);

        setIsLoading(true);
      })
      .catch(error => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  const renderPic = (isOddColumn: boolean, id: string) => {
    const filteredPhotoArr = isOddColumn
      ? photos.filter((el: IApiData, index: number) => index % 2 === 0)
      : photos.filter((el: IApiData, index: number) => index % 2 !== 0);

    return (
      <FlatList
        data={filteredPhotoArr}
        renderItem={item => image(item, isOddColumn)}
        keyExtractor={(i: IApiData) => i.id}
        scrollEnabled={false}
        listKey={id}
      />
    );
  };

  const renderView = (
    <MyScrollView isRefreshing={isRefreshing} onRefresh={onRefresh}>
      <View
        style={[styles.scrollWrapper, {backgroundColor: colors.background}]}>
        <View style={styles.firstColumn}>{renderPic(true, 'first')}</View>
        <View style={styles.secondColumn}>{renderPic(false, 'second')}</View>
      </View>
    </MyScrollView>
  );

  return !isError ? (
    isLoading ? (
      renderView
    ) : (
      <View
        style={[styles.indicatorWrapper, {backgroundColor: colors.background}]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
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
