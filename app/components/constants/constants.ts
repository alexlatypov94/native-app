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
  topPhotos = 'TopPhoto',
  newPhotos = 'NewPhoto',
  profile = 'Profile',
  settings = 'Settings',
  selectedPhoto = 'SelectedPhoto',
  likedPhoto = 'likedPhoto',
  dispatcherScreen = 'DispatcherScreen',
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

export const HEADER_ITEMS = {
  menu: MenuSvg,
  title: 'My Studio',
  filter: FilterSvg,
};

export const DEFAULT_USER = {
  name: 'User',
  surname: 'User',
};

export const COLOR_ACTIVITY_INDICATOR = '#00ff00';

export const UNDERLAY_COLOR_AUTH = '#94bfd8';

export const ANIMATION_DURATION = 3000;
export const ANIMATION_SCALE_END_VALUE = 6;

export const HEADER_TITLES = {
  myProfile: 'My Profile',
  likedPhotos: 'Liked Photos',
  randomPhotos: 'Random Photos',
  topPhotos: 'Top Photos',
  newPhotos: 'New Photos',
};

export const COLORS = {
  white: '#fff',
  black: '000',
  redLike: '#e63b3b',
};

export const MATERIAL_ICON_SIZES = {
  medium: 30,
  large: 44,
};

export const ICONS_NAME = {
  filter: 'filter-outline',
  heart: 'heart',
  heart_outline: 'heart-outline',
  instagram: 'instagram',
  twitter: 'twitter',
  briefcase: 'briefcase',
  home: 'home-outline',
  image: 'image-outline',
  account: 'account',
  settings: 'cog-outline',
};
