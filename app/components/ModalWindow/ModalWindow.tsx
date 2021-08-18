import React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import {Modal, StyleSheet, View, Text, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/ThemeContext';

interface IModalProp {
  isVisible: boolean;
  onChangeVisible: () => void;
}

export const ModalWindow: React.FC<IModalProp> = ({
  isVisible,
  onChangeVisible,
}: IModalProp) => {
  const [value, setValue] = useState('');

  const {colors} = useContext(ThemeContext);

  const handleHideModal = () => {
    setValue('');
    onChangeVisible();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={[styles.modalStyles, {backgroundColor: colors.background}]}>
        <Pressable
          onPress={handleHideModal}
          style={({pressed}) => [
            {backgroundColor: pressed ? '#5a58dfb0' : '#5a58df'},
            styles.hideButton,
          ]}>
          {<Text style={styles.textStyle}>Hide filter</Text>}
        </Pressable>
        <TextInput
          placeholder="Search photo"
          style={[
            styles.textInput,
            {color: colors.text, borderBottomColor: colors.text},
          ]}
          value={value}
          onChangeText={setValue}
          autoCapitalize="none"
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyles: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    padding: 5,
  },
  hideButton: {
    width: '100%',
  },
  textInput: {
    width: '80%',
    borderBottomWidth: 2,
    fontSize: 18,
    marginVertical: 10,
  },
});
