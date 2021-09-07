import {createContext} from 'react';

export const LIGHT_COLORS = {
  background: '#e0bdc7',
  thumb: '#fff',
  thumbTrack: '#969293',
  text: '#000',
  drawer: '#969293',
  tintColor: '#000',
  svgColor: '#000',
};
export const DARK_COLORS = {
  background: '#1F2126',
  thumb: '#fff',
  thumbTrack: '#4ed842ea',
  text: '#fff',
  drawer: '#1b2122',
  tintColor: '#fff',
  svgColor: '#fff',
};

export const ThemeContext = createContext({
  isDark: false,
  colors: LIGHT_COLORS,
  setColorScheme: (_scheme: string): void => {},
});
