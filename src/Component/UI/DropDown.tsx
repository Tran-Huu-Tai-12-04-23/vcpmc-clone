import { ArrowDownIcon } from "../../assets/icon";
import { useEffect, useState } from "react";

type DropdownType = {
  active: {
    key: number;
    name: string;
  };
  dropItems: {
    key: number;
    name: string;
  }[];
  onSelect: (value: { name: string; key: number }) => void;
  className?: string;
};
function Dropdown(props: DropdownType) {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const hideDropdown = () => {
      setActive(false);
    };
    window.addEventListener("click", hideDropdown);

    return () => {
      window.removeEventListener("click", hideDropdown);
    };
  }, []);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setActive(!active);
      }}
      className={`relative w-fit  min-w-[200px] cursor-pointer  ${props.className}`}
    >
      <div className="border-type-primary relative z-10 flex h-[40px] w-full items-center justify-between rounded-[8px] bg-main p-2 pl-[20px] pr-[20px]">
        <h5 className="text-size-primary font-normal">{props.active.name}</h5>
        <ArrowDownIcon className="text-primary" />
      </div>
      {active && (
        <div className="absolute z-[3] w-full -translate-y-2 rounded-[8px] bg-modal pb-[0.5rem]  pt-[0.5rem]">
          {props.dropItems.map((dropItem, index) => {
            return (
              <div
                onClick={() => props.onSelect(dropItem)}
                key={index}
                className=" h-[36px] pb-2 pl-[20px] pr-[20px] pt-2 text-size-primary hover:bg-[rgba(0,0,0,0.1)]"
              >
                {dropItem.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
