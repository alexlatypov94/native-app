import {SCREENS} from './../constants/constants';
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
  [SCREENS.profile]: undefined;
  [SCREENS.auth]: undefined;
  [SCREENS.signup]: undefined;
};
