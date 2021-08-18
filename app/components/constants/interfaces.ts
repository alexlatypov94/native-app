export interface IScreens extends IScreensObjectKeys {
  start: string;
  photos: string;
  settings: string;
  profile: string;
}

interface IScreensObjectKeys {
  [key: string]: string | undefined;
}

export interface IUserMenuItem {
  screen: string;
  icon: Function;
}
