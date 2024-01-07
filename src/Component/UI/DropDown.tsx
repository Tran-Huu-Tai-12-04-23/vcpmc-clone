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
  classDropItem?: string;
  width?: string;
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
      style={{
        width: props.width ? props.width : "",
      }}
      className={`relative  w-max cursor-pointer  ${props.className} `}
    >
      <div
        className={`${
          props.classDropItem ? props.classDropItem : "border-primary bg-main"
        } relative z-10 flex h-[40px] w-full items-center justify-between rounded-[8px] border-[1px] border-solid  p-2 pl-[20px] pr-[20px]`}
      >
        <h5 className="text-size-primary font-normal">{props.active.name}</h5>
        <ArrowDownIcon className="text-primary" />
      </div>
      <div className={`z-[3] h-0 w-full overflow-hidden bg-modal `}>
        {props.dropItems.map((dropItem, index) => {
          return (
            <div
              onClick={() => props.onSelect(dropItem)}
              key={index}
              className="h-[36px] pb-2 pl-[20px] pr-[20px] pt-2 text-size-primary hover:bg-[rgba(0,0,0,0.1)]"
            >
              {dropItem.name}
            </div>
          );
        })}
      </div>
      <div
        className={`z-[3]  ${
          active ? "" : "hidden"
        } absolute w-full -translate-y-2 rounded-[8px] bg-modal pb-[0.5rem]  pt-[0.5rem]`}
      >
        {props.dropItems.map((dropItem, index) => {
          return (
            <div
              onClick={() => props.onSelect(dropItem)}
              key={index}
              className="h-[36px] pb-2 pl-[20px] pr-[20px] pt-2 text-size-primary hover:bg-[rgba(0,0,0,0.1)]"
            >
              {dropItem.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
