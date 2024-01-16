import { IconProps } from "./_typeIcon";

function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      color={props.color}
      onClick={props.onClick}
      width="23"
      height="41"
      viewBox="0 0 23 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.07265 21.5525L19.0605 39.5344C19.8498 40.3217 21.1285 40.3217 21.9198 39.5344C22.7091 38.7471 22.7091 37.4683 21.9198 36.681L5.35879 20.1259L21.9178 3.57086C22.7071 2.78355 22.7071 1.50477 21.9178 0.715479C21.1285 -0.0718215 19.8478 -0.0718217 19.0585 0.715479L1.07066 18.6972C0.293493 19.4763 0.293493 20.7752 1.07265 21.5525Z"
        fill="#F5F5FF"
      />
    </svg>
  );
}

export default ArrowLeftIcon;
