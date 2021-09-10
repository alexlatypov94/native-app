import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  COLORS,
  ICONS_NAME,
  MATERIAL_ICON_SIZES,
} from '../../constants/constants';

export const GoBackButton: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => navigation.goBack();

  return (
    <TouchableWithoutFeedback onPress={handleGoBack}>
      <MaterialCommunityIcons
        name={ICONS_NAME.arrow_left}
        size={MATERIAL_ICON_SIZES.medium}
        color={COLORS.white}
      />
    </TouchableWithoutFeedback>
  );
};
