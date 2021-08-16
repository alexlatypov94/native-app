import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {IApiData} from '../../interface';
import {getPhotos} from '../../utils/getPhotos';
import {Dimensions} from 'react-native';
import {PHOTO_HEIGHT} from '../../constants/constants';

const image = ({item, index}: any) => {
  const photoHeight = (i: number) => {
    return i % 2 ? PHOTO_HEIGHT.large : PHOTO_HEIGHT.small;
  };
  return (
    <Image
      style={styles.imgStyle}
      source={{uri: item?.urls?.regular, height: photoHeight(index)}}
    />
  );
};

export const PhotoScreen: React.FC = () => {
  const [photos, setPhotos] = useState<IApiData[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const renderPic = () => {
    return (
      <FlatList
        data={photos}
        renderItem={image}
        keyExtractor={i => i.id}
        numColumns={2}
      />
    );
  };

  const renderView = (
    <View style={styles.scrollWrapper}>
      <View style={styles.leftSide}>{renderPic()}</View>
    </View>
  );

  return !isError ? (
    isLoading ? (
      renderView
    ) : (
      <View style={styles.indicatorWrapper}>
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
    width: Dimensions.get('window').width,
    backgroundColor: '#1F2126',
  },
  imgStyle: {
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
    margin: 15,
  },

  leftSide: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },

  indicatorWrapper: {
    backgroundColor: '#1F2126',
    flex: 1,
    justifyContent: 'center',
  },
});
