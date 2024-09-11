import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M42.0306 17.585V19.4216V21.2584V41.0327H56.3265H58.1633H60V17.585H42.0306Z"
        fill="#F2B300"
      />
      <path
        d="M0 17.585V41.0327H1.83668H3.67348H18.5719V21.2584V19.4216V17.585H0Z"
        fill="#F2B300"
      />
      <path
        d="M60 52.1143V44.7062H58.1633H56.3266H3.67348H1.83668H0V52.1143H25.9898V56.2653H18.6123V59.9388H41.3878V56.2653H34.0102V52.1143H60ZM31.26 48.4408V49.5613H28.7191V48.4408V47.0204H31.26V48.4408Z"
        fill="black"
      />
      <path
        d="M36.7996 17.585H34.9629H25.6286H23.7919H22.2454V17.6571V21.2584V41.0327H23.7919H25.6286H34.9629H36.7996H38.3571V21.2584V19.4216V17.6571V17.585H36.7996Z"
        fill="#F2B300"
      />
      <path
        d="M30.2963 0.0611572L22.4571 13.9836H24.5656H26.673H33.9184H36.0256H38.1343L30.2963 0.0611572Z"
        fill="black"
      />
    </svg>
  );
}

export default SvgComponent;
