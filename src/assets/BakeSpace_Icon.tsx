import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BakeSpace_Icon(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={props.color||"#e8eaed"}
      {...props}
    >
      <Path d="M366.22-185.87q-26.28 0-48.46-13.01-22.17-13.01-37.8-34.77L105.87-480l174.09-246.35q15.62-21.46 37.8-34.9 22.18-13.45 48.46-13.45h408.69q32.91 0 56.35 23.44 23.44 23.44 23.44 56.35v429.82q0 32.68-23.44 55.95-23.44 23.27-56.35 23.27H366.22zm408.69-79.22v-429.82 429.82zm-419.79 0h419.79v-429.82H355.22L204.61-480l150.51 214.91zm103.05-63.74l102.4-101.82 102.39 101.82 49.78-49.78L609.91-480l100.83-101.39-49.78-50.35-100.39 102.39-102.4-102.39-50.34 50.35L511.22-480 407.83-378.61l50.34 49.78z" />
    </Svg>
  )
}

export default BakeSpace_Icon
