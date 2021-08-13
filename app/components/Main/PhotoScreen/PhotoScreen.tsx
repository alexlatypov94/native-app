import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IApiData} from '../../interface';
import {getPhotos} from '../../utils/getPhotos';
import {Dimensions} from 'react-native';

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

  const renderPic = (isOdd: boolean) => {
    const sortedPic = isOdd
      ? photos.filter((el, i) => i % 2 === 0)
      : photos.filter((el, i) => i % 2 !== 0);
    return sortedPic.map(el => {
      return (
        <Image
          key={el.id}
          style={styles.imgStyle}
          source={{uri: el.urls.regular, height: isOdd ? 140 : 170}}
        />
      );
    });
  };

  return !isError ? (
    <ScrollView>
      <View style={styles.scrollWrapper}>
        <View style={styles.leftSide}>{renderPic(true)}</View>
        <View style={styles.rightSide}>{renderPic(false)}</View>
      </View>
    </ScrollView>
  ) : (
    <View>
      <Text>Some Error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#1F2126',
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgStyle: {
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  imgStyleLeft: {
    height: 100,
  },

  imgStyleRight: {
    height: 150,
  },

  leftSide: {},
  rightSide: {},
});
