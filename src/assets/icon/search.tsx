import { IconProps } from "./_typeIcon";

function SearchIcon(props: IconProps) {
  return (
    <svg
      className={props.className}
      color={props.color}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5833 11.6667C20.5833 17.1435 16.1435 21.5833 10.6667 21.5833C5.18984 21.5833 0.75 17.1435 0.75 11.6667C0.75 6.18984 5.18984 1.75 10.6667 1.75C16.1435 1.75 20.5833 6.18984 20.5833 11.6667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 23L18 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
