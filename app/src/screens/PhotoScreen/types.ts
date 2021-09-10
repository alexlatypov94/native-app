import {SCREENS} from './../../constants/constants';
import {UserDrawerParamsList} from './../../interfaces/interfaces';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Props = NativeStackScreenProps<
  UserDrawerParamsList,
  SCREENS.photos | SCREENS.topPhotos | SCREENS.newPhotos
>;
