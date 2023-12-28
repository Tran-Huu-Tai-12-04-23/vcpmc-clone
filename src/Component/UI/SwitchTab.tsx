type SwitchTabProps = {
    buttons: {
        name: string;
        key: number;
        action: () => void;
    }[];
    active: number;
    className?: string;
};
function SwitchTab(props: SwitchTabProps) {
    return (
        <div
            className={`${props.className} box-center overflow-hidden rounded-[24px] h-[40px] min-w-[300px] border-type-primary`}
        >
            {props.buttons.map((button, index) => {
                return (
                    <button
                        key={index}
                        onClick={button.action}
                        className={`p-4 w-full ${props.active === button.key && ' bg-[#FF7506]'}`}
                    >
                        {button.name}
                    </button>
                );
            })}
        </div>
    );
}

export default SwitchTab;
