import React from 'react';
import {Alert, Linking, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ILinkComponentProp {
  url: string;
  icon: string;
}

export const LinkComponent: React.FC<ILinkComponentProp> = React.memo(
  ({url, icon}: ILinkComponentProp) => {
    const isCorrectUrl = url ? url.split('/').includes('null') : false;

    const handleRedirect = async () => {
      const isOpenedUrl = await Linking.canOpenURL(url);

      if (isOpenedUrl && !isCorrectUrl) {
        await Linking.openURL(url);
      } else {
        Alert.alert("The author didn't leave a link to this social network");
      }
    };
    return (
      <TouchableOpacity onPress={handleRedirect}>
        <MaterialCommunityIcons name={icon} color="#fff" size={34} />
      </TouchableOpacity>
    );
  },
);
