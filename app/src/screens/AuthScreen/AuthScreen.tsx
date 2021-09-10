import React, {useEffect, useState} from 'react';
import {TouchableHighlight, View, Text, Pressable} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SCREENS, UNDERLAY_COLOR_AUTH} from '../../constants/constants';
import {
  IRenderTypeAuthReg,
  UserDrawerParamsList,
} from '../../interfaces/interfaces';
import {emailValidator, signIn} from '../../utils/index';
import {useDispatch, useSelector} from 'react-redux';
import {startAuth} from '../../store/action/authAction';
import auth from '@react-native-firebase/auth';
import {styles} from './styles';
import {Controller, useForm} from 'react-hook-form';
import {TextInputAuthOrReg} from '../../components';
import {FormDataAuth} from './types';
import {IAppState} from '../../store/types';
import {PacmanIndicator} from 'react-native-indicators';

export const AuthScreen: React.FC = () => {
  const navigator =
    useNavigation<NavigationProp<UserDrawerParamsList, SCREENS.signup>>();

  const {isAuth, isLoadingAuth} = useSelector(
    (store: IAppState) => store.authReducer,
  );

  // console.log(isLoadingAuth);

  const [inValidEmail, setInValidEmail] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<FormDataAuth>({mode: 'onChange'});

  useEffect(() => {
    if (isAuth) {
      navigator.navigate(SCREENS.profile);
    }
  }, [isAuth, navigator]);

  const dispatch = useDispatch();
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

      <Pressable
        onPress={handleSubmit(handlePress)}
        disabled={!isValid}
        style={styles.signInButton}>
        <Text>Sign In</Text>
      </Pressable>
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
      {isLoadingAuth && (
        <View style={styles.loadingAuth}>
          <PacmanIndicator color="red" />
        </View>
      )}
    </View>
  );
};
