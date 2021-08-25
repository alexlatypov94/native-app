import {SCREENS} from './constants';
export interface IScreens extends IScreensObjectKeys {
  start: string;
  photos: string;
  settings: string;
  profile: string;
  selectedPhoto: string;
}

interface IScreensObjectKeys {
  [key: string]: string | undefined;
}

export interface IUserMenuItem {
  id?: string;
  screen: SCREENS;
  icon: Function;
}
