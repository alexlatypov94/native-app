import React from 'react';
import {Button, Text} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import {TextInputComponent} from '../../components';
import {addImageToFirebaseStorage, addUserInfoToDB} from '../../utils';
import {IRenderType} from '../../interfaces/interfaces';
import ImagePicker from 'react-native-customized-image-picker';
import {useSelector} from 'react-redux';
import {IAppState} from '../../store/types';
import {FormUserOtherData} from './types';

const schema = yup.object().shape({
  age: yup.number().positive().integer(),
});

export const UserInfoFormScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<FormUserOtherData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const {id} = useSelector((store: IAppState) => store.authReducer);

  const onSubmit = (data: FormUserOtherData) => addUserInfoToDB(data);

  const renderInput = ({field: {onChange, value, onBlur}}: IRenderType) => (
    <TextInputComponent value={value} onChangeText={onChange} onBlur={onBlur} />
  );

  const renderInputAboutUser = ({
    field: {onChange, value, onBlur},
  }: IRenderType) => (
    <TextInputComponent
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      isMultiplyLines={true}
    />
  );

  const renderPicker = ({field: {onChange, value, onBlur}}: IRenderType) => (
    <Picker selectedValue={value} onValueChange={onChange} onBlur={onBlur}>
      <Picker.Item label="Male" value="male" />
      <Picker.Item label="Female" value="female" />
    </Picker>
  );

  const uploadPhoto = () => {
    ImagePicker.openPicker({}).then(async (image: any) => {
      const fileName = image[0].path;
      addImageToFirebaseStorage(fileName, id);
    });
  };

  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.label}>Upload avatar</Text>
      <Button title="Upload photo" onPress={uploadPhoto} />
      <Text style={styles.label}>Age</Text>
      <Controller
        control={control}
        name="age"
        defaultValue=""
        render={renderInput}
      />
      {errors.age && <Text style={styles.error}>*Incorrect value</Text>}
      <Text style={styles.label}>Biography</Text>
      <Controller
        control={control}
        name="biography"
        defaultValue=""
        render={renderInputAboutUser}
      />
      <Text style={styles.label}>Choose gender</Text>
      <Controller
        control={control}
        name="gender"
        defaultValue="male"
        render={renderPicker}
      />
      <Button
        title="Submit"
        disabled={!isValid}
        onPress={handleSubmit(onSubmit)}
      />
    </ScrollView>
  );
};
