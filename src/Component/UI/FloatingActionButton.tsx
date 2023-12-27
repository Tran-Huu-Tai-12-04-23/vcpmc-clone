type FloatingActionButtonProps = {
    floatingActionButtonConfig?: { icon: React.ReactNode; name: string; action: () => void }[] | undefined;
};
function FloatingActionButton(props: FloatingActionButtonProps) {
    const renderAction = () => {
        return props.floatingActionButtonConfig?.map((ac, index) => {
            return (
                <div
                    key={index}
                    className="pt-2 cursor-pointer pb-2 flex flex-col justify-center items-center rounded-full mt-2 mb-2"
                    onClick={ac.action}
                >
                    <div className="flex text-primary bg-[#505064] w-[52px] h-[52px] justify-center items-center p-2 rounded-full">
                        {ac.icon}
                    </div>
                    <h6 className="text-center w-[78px] text-[12px] font-medium leading-[18px mt-[14px]">{ac.name}</h6>
                </div>
            );
        });
    };
    return (
        <div className="fixed z-[100000] w-[110px] flex flex-col justify-center items-center right-0 top-[148px] bg-menu rounded-l-lg">
            {props.floatingActionButtonConfig && renderAction()}
        </div>
    );
}

export default FloatingActionButton;
