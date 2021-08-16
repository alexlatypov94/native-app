export interface IScreens extends IScreensObjectKeys {
  start: string;
  photos: string;
  settings: string;
  profile: string;
}

interface IScreensObjectKeys {
  [key: string]: string;
}
