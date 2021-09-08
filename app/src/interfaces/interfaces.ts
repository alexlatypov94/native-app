import {SCREENS} from '../constants/constants';
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
export interface IApiData {
  alt_description: string;
  blur_hash: string;
  categories: Array<any>;
  color: string;
  created_at: string;
  current_user_collections: Array<any>;
  description: string | null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: ILinksApiData;
  promoted_at: string | null;
  sponsorship: ISponsorship;
  updated_at: string;
  urls: IUrls;
  user: IUser;
  width: number;
  idColumn?: string;
  liked?: boolean;
}

interface ILinksApiData {
  download: string | null;
  download_location: string | null;
  html: string | null;
  self: string | null;
}

interface ISponsorship {
  impression_urls: Array<string>;
  sponsor: ISponsor;
  tagline: string;
  tagline_url: string;
}

interface ISponsor {
  accepted_tos: boolean;
  bio: string;
  first_name: string | null;
  for_hire: boolean;
  id: string;
  instagram_username: string | null;
  last_name: string | null;
  links: ISponsorLinks;
  location: string | null;
  name: string | null;
  portfolio_url: string | null;
  profile_image: IProfileImage;
  social: ISocial;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: string | null;
  updated_at: string;
  username: string | null;
}

interface ISponsorLinks {
  followers: string;
  following: string;
  html: string;
  likes: string;
  photos: string;
  portfolio: string;
  self: string;
}

interface IProfileImage {
  large: string;
  medium: string;
  small: string;
}

interface ISocial {
  instagram_username: string | null;
  paypal_email: string | null;
  portfolio_url: string | null;
  twitter_username: string | null;
}

interface IUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

interface IUser {
  accepted_tos: boolean;
  bio: string | null;
  first_name: string | null;
  for_hire: boolean;
  id: string;
  instagram_username: string | null;
  last_name: string | null;
  links: ISponsorLinks;
  location: string | null;
  name: string | null;
  portfolio_url: string | null;
  profile_image: IProfileImage;
  social: ISocial;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: string | null;
  updated_at: string | null;
  username: string | null;
}

export type UserDrawerParamsList = {
  [SCREENS.start]: undefined;
  [SCREENS.photos]: undefined;
  [SCREENS.settings]: undefined;
  [SCREENS.selectedPhoto]: {photoData: IApiData};
  [SCREENS.likedPhoto]: undefined;
  [SCREENS.profile]: undefined;
  [SCREENS.newPhotos]: undefined;
  [SCREENS.topPhotos]: undefined;
  [SCREENS.dispatcherScreen]: undefined;
  [SCREENS.auth]: undefined;
  [SCREENS.signup]: undefined;
  [SCREENS.infoForm]: undefined;
};

export interface IUserInfoDB {
  name: string;
  surname: string;
}

export type FormUserOtherData = {
  age: string;
  biography: string;
  gender: string;
};

export type FormDataReg = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirm: string;
};

export type FormDataAuth = {
  email: string;
  password: string;
};

export interface IRenderType {
  field: {
    onChange: () => void;
    value: string;
    onBlur: () => void;
  };
}
export interface IRenderTypeAuthReg {
  field: {
    onChange: () => void;
    value: string;
    onBlur: () => void;
    name: string;
  };
}
