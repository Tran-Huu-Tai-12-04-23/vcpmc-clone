import { IconProps } from "./_typeIcon";

function AddPersonIcon(props: IconProps) {
  return (
    <svg
      color={props.color}
      className={props.className}
      onClick={props.onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3333 28V25.3333C21.3333 23.9188 20.7714 22.5623 19.7712 21.5621C18.771 20.5619 17.4145 20 16 20H6.66666C5.25217 20 3.89562 20.5619 2.89543 21.5621C1.89523 22.5623 1.33333 23.9188 1.33333 25.3333V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6667 10.668V18.668"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.6667 14.668H22.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 14.6667C14.2789 14.6667 16.6667 12.2789 16.6667 9.33333C16.6667 6.38781 14.2789 4 11.3333 4C8.38781 4 6 6.38781 6 9.33333C6 12.2789 8.38781 14.6667 11.3333 14.6667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AddPersonIcon;
