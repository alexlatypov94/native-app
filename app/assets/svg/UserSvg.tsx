import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const UserSvg: React.FC = () => (
  <Svg width="200" height="200" viewBox="0 0 512 512">
    <Circle fill="#ECEFF1" cx="256" cy="256" r="256" />
    <Path
      d="M442.272,405.696c-11.136-8.8-24.704-15.136-39.424-18.208l-70.176-14.08
      c-7.36-1.408-12.672-8-12.672-15.68v-16.096c4.512-6.336,8.768-14.752,13.216-23.552c3.456-6.816,8.672-17.088,11.264-19.744
      c14.208-14.272,27.936-30.304,32.192-50.976c3.968-19.392,0.064-29.568-4.512-37.76c0-20.448-0.64-46.048-5.472-64.672
      c-0.576-25.216-5.152-39.392-16.672-51.808c-8.128-8.8-20.096-10.848-29.728-12.48c-3.776-0.64-8.992-1.536-10.912-2.56
      c-17.056-9.216-33.92-13.728-54.048-14.08c-42.144,1.728-93.952,28.544-111.296,76.352c-5.376,14.56-4.832,38.464-4.384,57.664
      l-0.416,11.552c-4.128,8.064-8.192,18.304-4.192,37.76c4.224,20.704,17.952,36.768,32.416,51.232
      c2.368,2.432,7.712,12.8,11.232,19.648c4.512,8.768,8.8,17.152,13.312,23.456v16.096c0,7.648-5.344,14.24-12.736,15.68l-70.24,14.08
      c-14.624,3.104-28.192,9.376-39.296,18.176c-3.456,2.784-5.632,6.848-5.984,11.264s1.12,8.736,4.096,12.032
      C115.648,481.728,184.224,512,256,512s140.384-30.24,188.16-83.008c2.976-3.296,4.48-7.648,4.096-12.064
      C447.904,412.512,445.728,408.448,442.272,405.696z"
      fill="#455A64"
    />
  </Svg>
);
