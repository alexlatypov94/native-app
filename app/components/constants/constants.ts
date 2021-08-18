import {IUserMenuItem} from './interfaces';
import {HomeSvg} from './../../assets/svg/HomeSvg';
import {GallerySvg} from './../../assets/svg/GallerySvg';
import {AvatarSvg} from './../../assets/svg/AvatarSvg';
import {SettingsSvg} from './../../assets/svg/SettingsSvg';
import {MenuSvg} from './../../assets/svg/MenuSvg';
import {FilterSvg} from './../../assets/svg/FilterSvg';

export enum SCREENS {
  start = 'Start',
  photos = 'Photos',
  profile = 'Profile',
  settings = 'Settings',
  auth = 'Authorization',
  signup = 'Registration',
}

export const PHOTO_HEIGHT = {
  small: 130,
  large: 170,
};

export const USER_MENU_ITEMS: Array<IUserMenuItem> = [
  {
    screen: SCREENS.start,
    icon: HomeSvg,
  },
  {
    screen: SCREENS.photos,
    icon: GallerySvg,
  },
  {
    screen: SCREENS.profile,
    icon: AvatarSvg,
  },
  {
    screen: SCREENS.settings,
    icon: SettingsSvg,
  },
];

// export const USER_MENU_ITEMS = {
//   start: HomeSvg,
//   photos: GallerySvg,
//   profile: AvatarSvg,
//   settings: SettingsSvg,
// };

export const HEADER_ITEMS = {
  menu: MenuSvg,
  title: 'My Studio',
  filter: FilterSvg,
};

export const USER = {
  name: 'Ivan',
  surname: 'Ivanov',
};
