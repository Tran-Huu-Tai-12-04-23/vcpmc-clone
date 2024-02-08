type FloatingActionButtonProps = {
  floatingActionButtonConfig:
    | {
        icon: React.ReactNode;
        name: string;
        action: () => void;
        disable?: boolean;
        hidden?: boolean;
      }[]
    | undefined;
};
function FloatingActionButton(props: FloatingActionButtonProps) {
  const renderAction = () => {
    return props.floatingActionButtonConfig?.map((ac, index) => {
      return (
        !ac.hidden && (
          <div
            key={index}
            className=" mb-2 mt-2 flex cursor-pointer flex-col items-center justify-center rounded-full pb-2 pt-2"
            onClick={ac.action}
          >
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#505064] p-2 text-primary">
              {ac.icon}
            </div>
            <h6
              className={`${
                ac.disable && "text-third"
              } leading-[18px mt-[14px] w-[78px] text-center text-[12px] font-medium`}
            >
              {ac.name}
            </h6>
          </div>
        )
      );
    });
  };
  return (
    <div className="flex h-fit w-[110px] flex-col items-center justify-center rounded-l-2xl bg-menu">
      {props.floatingActionButtonConfig && renderAction()}
    </div>
  );
}

export default FloatingActionButton;
