import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

function TicIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 40 40"
      {...props}>
      {props.extraBG && (
        <Rect width="100%" height="100%" fill="#37A196" rx={10} ry={10} />
      )}

      <Path
        data-name="Path 17983"
        d="M377.501 2705.282l8.359 7.866 15.5-15.65"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        transform="translate(-369 -2684.999)"
      />
    </Svg>
  );
}

export default TicIcon;
