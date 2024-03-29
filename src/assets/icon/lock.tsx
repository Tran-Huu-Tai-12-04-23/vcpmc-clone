import { IconProps } from "./_typeIcon";

function LockIcon(props: IconProps) {
  return (
    <svg
      color={props.color}
      className={props.className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.3333 14.667H6.66667C5.19391 14.667 4 15.8609 4 17.3337V26.667C4 28.1398 5.19391 29.3337 6.66667 29.3337H25.3333C26.8061 29.3337 28 28.1398 28 26.667V17.3337C28 15.8609 26.8061 14.667 25.3333 14.667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33334 14.667V9.33366C9.33334 7.56555 10.0357 5.86986 11.286 4.61961C12.5362 3.36937 14.2319 2.66699 16 2.66699C17.7681 2.66699 19.4638 3.36937 20.714 4.61961C21.9643 5.86986 22.6667 7.56555 22.6667 9.33366V14.667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LockIcon;
