import React from 'react';
import {useContext} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MATERIAL_ICON_SIZES} from '../../constants/constants';
interface IFilterProp {
  onVisibleModal: () => void;
}

export const Filter: React.FC<IFilterProp> = React.memo(
  ({onVisibleModal}: IFilterProp) => {
    const {colors} = useContext(ThemeContext);
    const color = colors.svgColor;
    return (
      <View>
        <TouchableWithoutFeedback onPress={onVisibleModal}>
          <View style={styles.filter}>
            <MaterialCommunityIcons
              name="filter-outline"
              size={MATERIAL_ICON_SIZES.medium}
              color={color}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  filter: {
    paddingHorizontal: 20,
  },
});
