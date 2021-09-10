import React, {useState} from 'react';
import {Button, TouchableHighlight, View, Text} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREENS, UNDERLAY_COLOR_AUTH} from '../../constants/constants';
import {
  IRenderTypeAuthReg,
  UserDrawerParamsList,
} from '../../interfaces/interfaces';
import {emailValidator, signIn} from '../../utils/index';
import {useDispatch} from 'react-redux';
import {startAuth, setAuthWithoutReg} from '../../store/action/authAction';
import auth from '@react-native-firebase/auth';
import {styles} from './styles';
import {Controller, useForm} from 'react-hook-form';
import {TextInputAuthOrReg} from '../../components';
import {FormDataAuth} from './types';

export const AuthScreen: React.FC = () => {
  const navigator =
    useNavigation<NavigationProp<UserDrawerParamsList, SCREENS.signup>>();

  const [inValidEmail, setInValidEmail] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<FormDataAuth>({mode: 'onChange'});

  const dispatch = useDispatch();
  const handleAuthWithoutReg = () => dispatch(setAuthWithoutReg());
  const handleAuth = () => {
    auth().onAuthStateChanged(user => {
      dispatch(startAuth(user?.uid as string));
    });
  };

  const renderInput = ({
    field: {onChange, value, name},
  }: IRenderTypeAuthReg) => {
    return (
      <TextInputAuthOrReg
        value={value}
        onChangeText={onChange}
        placeholder={name}
      />
    );
  };

  const handlePress = (data: FormDataAuth) => {
    const checkEmail = emailValidator(data.email);
    if (checkEmail) {
      signIn(data.email, data.password);
      handleAuth();
    } else {
      setInValidEmail(true);
    }
  };

  const handleMoveReg = () => {
    navigator.navigate(SCREENS.signup);
  };

  const rules = {required: true};

  return (
    <View style={styles.wrapper}>
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
      {inValidEmail && <Text style={styles.invalidEmail}>Incorrect data</Text>}

      <Button
        onPress={handleSubmit(handlePress)}
        title="Log in"
        disabled={!isValid}
      />
      <View style={styles.touchContainer}>
        <TouchableHighlight
          onPress={handleMoveReg}
          underlayColor={UNDERLAY_COLOR_AUTH}
          style={styles.touchRadius}>
          <View style={styles.moveRegStyle}>
            <Text>Sign Up</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.touchContainer}>
        <TouchableHighlight
          onPress={handleAuthWithoutReg}
          underlayColor={UNDERLAY_COLOR_AUTH}
          style={styles.touchRadius}>
          <View style={styles.moveRegStyle}>
            <Text>Continue without registration</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};
