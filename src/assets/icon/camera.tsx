import { IconProps } from "./_typeIcon";

function CameraIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      onClick={props.onClick}
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.5625 30.3342C36.5625 31.1774 36.2276 31.9861 35.6313 32.5823C35.0351 33.1786 34.2264 33.5135 33.3832 33.5135H4.76907C3.92585 33.5135 3.11717 33.1786 2.52093 32.5823C1.92469 31.9861 1.58972 31.1774 1.58972 30.3342V12.8478C1.58972 12.0046 1.92469 11.1959 2.52093 10.5996C3.11717 10.0034 3.92585 9.66844 4.76907 9.66844H11.1278L14.3071 4.89941H23.8452L27.0245 9.66844H33.3832C34.2264 9.66844 35.0351 10.0034 35.6313 10.5996C36.2276 11.1959 36.5625 12.0046 36.5625 12.8478V30.3342Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0761 27.1549C22.5879 27.1549 25.4348 24.308 25.4348 20.7962C25.4348 17.2844 22.5879 14.4375 19.0761 14.4375C15.5643 14.4375 12.7174 17.2844 12.7174 20.7962C12.7174 24.308 15.5643 27.1549 19.0761 27.1549Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CameraIcon;
