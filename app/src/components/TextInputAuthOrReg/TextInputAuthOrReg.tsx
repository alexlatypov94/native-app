import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
interface ITextInputProp {
  value: string;
  onBlur?: () => void;
  onChangeText: () => void;
  placeholder: string;
}
export const TextInputAuthOrReg: React.FC<ITextInputProp> = ({
  value,
  onBlur,
  onChangeText,
  placeholder,
}: ITextInputProp) => {
  const isSecure = placeholder === 'password' || placeholder === 'confirm';
  return (
    <TextInput
      style={styles.input}
      value={value}
      onBlur={onBlur}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={isSecure}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    width: '80%',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});
