import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface ITextInputProp {
  value: string;
  onBlur: () => void;
  onChangeText: () => void;
  isMultiplyLines?: boolean;
}

export const TextInputComponent: React.FC<ITextInputProp> = React.memo(
  ({value, onBlur, onChangeText, isMultiplyLines = false}: ITextInputProp) => {
    return isMultiplyLines ? (
      <TextInput
        style={styles.input}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
        numberOfLines={3}
        textAlignVertical="top"
        multiline={true}
        maxLength={100}
      />
    ) : (
      <TextInput
        style={styles.input}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
      />
    );
  },
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
  },
});
