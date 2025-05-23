import * as React from 'react';
import Svg, {SvgProps, Mask, Rect, G, Path} from 'react-native-svg';

export const StateIcon = (props: SvgProps) => (
  <Svg
    width={3}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={3}
      height={23}>
      <Rect y={0.938} width={3} height={22} rx={1.5} fill="#C4C4C4" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#AC5253" d="M-12-.063h24v24h-24z" />
    </G>
  </Svg>
);
