import { IconProps } from "./_typeIcon";

function ArrowRight(props: IconProps) {
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
        d="M21.9273 18.6975L3.93952 0.715631C3.15023 -0.0716727 1.87145 -0.0716725 1.08016 0.715631C0.290867 1.50293 0.290867 2.78171 1.08016 3.56901L17.6412 20.1241L1.08216 36.6792C0.292866 37.4665 0.292866 38.7452 1.08216 39.5345C1.87145 40.3218 3.15223 40.3218 3.94152 39.5345L21.9293 21.5528C22.7065 20.7737 22.7065 19.4748 21.9273 18.6975Z"
        fill="#F5F5FF"
      />
    </svg>
  );
}

export default ArrowRight;
