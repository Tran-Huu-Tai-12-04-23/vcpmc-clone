import { IconProps } from './_typeIcon';

function EditIcon(props: IconProps) {
    return (
        <svg
            className={props.className}
            style={{
                color: 'inherit',
            }}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.6667 5.33301H5.33333C4.62609 5.33301 3.94781 5.61396 3.44771 6.11406C2.94762 6.61415 2.66666 7.29243 2.66666 7.99967V26.6663C2.66666 27.3736 2.94762 28.0519 3.44771 28.552C3.94781 29.0521 4.62609 29.333 5.33333 29.333H24C24.7072 29.333 25.3855 29.0521 25.8856 28.552C26.3857 28.0519 26.6667 27.3736 26.6667 26.6663V17.333"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24.6667 3.33331C25.1971 2.80288 25.9165 2.50488 26.6667 2.50488C27.4168 2.50488 28.1362 2.80288 28.6667 3.33331C29.1971 3.86374 29.4951 4.58316 29.4951 5.33331C29.4951 6.08346 29.1971 6.80288 28.6667 7.33331L16 20L10.6667 21.3333L12 16L24.6667 3.33331Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default EditIcon;
