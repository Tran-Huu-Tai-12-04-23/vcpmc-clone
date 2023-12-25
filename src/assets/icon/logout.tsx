import { IconProps } from './_typeIcon';

function LogoutIcon(props: IconProps) {
    return (
        <svg
            style={{
                color: 'inherit',
            }}
            className={props.className}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21.3333 22.6663L28 15.9997L21.3333 9.33301"
                stroke="currentColor"
                strokeWidth="2.0625"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M28 16H12"
                stroke="currentColor"
                strokeWidth="2.0625"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default LogoutIcon;