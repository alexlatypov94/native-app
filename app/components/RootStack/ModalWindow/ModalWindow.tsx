import React, {useState, useContext} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface IModalProp {
  isVisible: boolean;
  onChangeVisible: () => void;
}

export const ModalWindow: React.FC<IModalProp> = React.memo(
  ({isVisible, onChangeVisible}: IModalProp) => {
    const [value, setValue] = useState<string>('');

    const {colors} = useContext(ThemeContext);

    const bgColor = {backgroundColor: colors.background};
    const btnStyle = ({pressed}: {pressed: boolean}) => [
      {backgroundColor: pressed ? '#5a58dfb0' : '#5a58df'},
      styles.hideButton,
    ];
    const textInputStyle = {color: colors.text, borderBottomColor: colors.text};

    const handleHideModal = () => {
      setValue('');
      onChangeVisible();
    };

    return (
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={[styles.modalStyles, bgColor]}>
          <Pressable onPress={handleHideModal} style={btnStyle}>
            {<Text style={styles.textStyle}>Hide filter</Text>}
          </Pressable>
          <TextInput
            placeholder="Search photo"
            style={[styles.textInput, textInputStyle]}
            value={value}
            onChangeText={setValue}
            autoCapitalize="none"
          />
        </View>
      </Modal>
    );
  },
);

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
