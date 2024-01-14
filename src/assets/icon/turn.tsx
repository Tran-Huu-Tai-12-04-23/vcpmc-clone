import { IconProps } from "./_typeIcon";

function TurnIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      color={props.color}
      onClick={props.onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.48 8.85352C26.1578 10.5319 27.3003 12.6701 27.763 14.9978C28.2258 17.3254 27.9879 19.738 27.0795 21.9305C26.1712 24.123 24.6331 25.9969 22.6598 27.3153C20.6865 28.6337 18.3665 29.3374 15.9933 29.3374C13.6201 29.3374 11.3002 28.6337 9.3269 27.3153C7.3536 25.9969 5.81552 24.123 4.90716 21.9305C3.99879 19.738 3.76092 17.3254 4.22363 14.9978C4.68633 12.6701 5.82883 10.5319 7.50667 8.85352"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2.66602V15.9993"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TurnIcon;
