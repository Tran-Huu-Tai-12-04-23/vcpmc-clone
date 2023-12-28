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
      className={`${props.className} box-center   min-w-[300px] rounded-[24px]`}
    >
      {props.buttons.map((button, index) => {
        return (
          <button
            key={index}
            onClick={button.action}
            className={`${
              index > 0 && "-translate-x-8"
            }  relative h-[40px] w-fit rounded-full pl-10 pr-10 text-size-primary font-semibold  ${
              props.active === button.key
                ? "z-40 bg-[#b65100]"
                : "border-type-primary"
            }`}
          >
            {button.name}
          </button>
        );
      })}
    </div>
  );
}

export default SwitchTab;
