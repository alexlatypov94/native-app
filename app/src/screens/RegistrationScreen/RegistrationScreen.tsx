import React, {useState} from 'react';
import {Button, View, Text, ScrollView} from 'react-native';
import {addUserToDataBase, createUser, emailValidator} from '../../utils/index';
import {useDispatch} from 'react-redux';
import {registration} from '../../store/action/authAction';
import {Controller, useForm} from 'react-hook-form';
import {TextInputAuthOrReg} from '../../components';
import {styles} from './styles';
import {FormDataReg, IRenderTypeAuthReg} from '../../interfaces/interfaces';

export const RegistrationScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<FormDataReg>({mode: 'onBlur'});
  const [inValidEmail, setInvalidEmail] = useState<boolean>(false);
  const dispatch = useDispatch();
  const storeData = (userName: string, userSurname: string) => {
    dispatch(registration({name: userName, surname: userSurname}));
  };

  const handleSignUp = (data: FormDataReg) => {
    const checkEmail = emailValidator(data.email);
    if (checkEmail && data.password === data.confirm) {
      createUser(data.email, data.password);
      storeData(data.name, data.surname);
      addUserToDataBase({name: data.name, surname: data.surname});
    } else {
      setInvalidEmail(true);
    }
  };

  const renderInput = ({
    field: {onChange, value, onBlur, name},
  }: IRenderTypeAuthReg) => {
    return (
      <TextInputAuthOrReg
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={name}
      />
    );
  };

  const rules = {required: true};

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Controller
          control={control}
          name="name"
          defaultValue=""
          render={renderInput}
          rules={rules}
        />
        <Controller
          control={control}
          name="surname"
          defaultValue=""
          render={renderInput}
          rules={rules}
        />
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={renderInput}
          rules={rules}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={renderInput}
          rules={rules}
        />
        <Controller
          control={control}
          name="confirm"
          defaultValue=""
          render={renderInput}
          rules={rules}
        />
        {inValidEmail && <Text style={styles.error}>*Incorrect data</Text>}
        <Button
          title="Sign In"
          disabled={!isValid}
          onPress={handleSubmit(handleSignUp)}
        />
      </View>
    </ScrollView>
  );
};
