import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {FilterSvg} from '../../../assets/svg';

interface IFilterProp {
  isDark: boolean;
  onVisibleModal: () => void;
}

export const Filter: React.FC<IFilterProp> = ({
  isDark,
  onVisibleModal,
}: IFilterProp) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onVisibleModal}>
        <View style={styles.filter}>
          <FilterSvg color={isDark ? '#fff' : '#000'} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  filter: {
    paddingHorizontal: 20,
  },
});
