import React from 'react';
import {useContext} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {FilterSvg} from '../../../assets/svg';
import {ThemeContext} from '../../context/ThemeContext';

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
            <FilterSvg color={color} />
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
