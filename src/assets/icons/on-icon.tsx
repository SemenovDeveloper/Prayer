import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';

export const OnIcon = (props: SvgProps) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} y={0.5} width={21} height={21} rx={3.5} stroke="#424E75" />
    <Path
      d="M17 5 8.75 16 5 11"
      stroke="#514D47"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
