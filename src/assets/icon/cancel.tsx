import { IconProps } from "./_typeIcon";

function CancelIcon(props: IconProps) {
  const handleClick = props.onClick || (() => {});
  return (
    <svg
      onClick={handleClick}
      className={props.className || "text-error"}
      color={props.color || "#ff4747"}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 8L8 24"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8L24 24"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CancelIcon;
