import { ArrowDownIcon } from "../../assets/icon";
import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

type DropdownType = {
  active:
    | {
        key: number;
        name: string;
      }
    | {
        key: number;
        name: string;
      }[];
  dropItems: {
    key: number;
    name: string;
  }[];
  onSelect: (value: { name: string; key: number }) => void;
  className?: string;
  classDropItem?: string;
  width?: string;
  multiple?: boolean;
  onUnselect?: (value: { name: string; key: number }) => void;
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
      className={`relative ${!props.width && "w-max"}  cursor-pointer  ${
        props.className
      } `}
    >
      <div
        className={`${
          props.classDropItem ? props.classDropItem : "border-primary bg-main"
        } relative z-[31] flex h-[40px] ${
          props.width ? props.width : "w-full"
        } min-w-[10rem] items-center justify-between rounded-[8px] border-[1px] border-solid  p-2 pl-[20px] pr-[20px]`}
      >
        <h5 className="text-size-primary font-normal">
          {Array.isArray(props.active)
            ? props.active.length > 0
              ? props.active[0].name
              : "No active item"
            : props.active
              ? props.active.name
              : "No active item"}
        </h5>
        <ArrowDownIcon className="text-primary" />
      </div>
      <div className={`z-[30] h-0 w-full overflow-hidden bg-modal `}>
        {props.dropItems.map((dropItem, index) => {
          return (
            <div
              onClick={() => props.onSelect(dropItem)}
              key={index}
              className="box-start h-[36px] flex-shrink-0 gap-2 pb-2 pl-[20px] pr-[20px] pt-2 text-size-primary hover:bg-[rgba(0,0,0,0.1)]"
            >
              {props.multiple && <Checkbox />}
            </div>
          );
        })}
      </div>
      <div
        className={`z-[30]  ${
          active ? "" : "hidden"
        } absolute w-full -translate-y-2 rounded-[8px] bg-modal pb-[0.5rem]  pt-[0.5rem]`}
      >
        {props.dropItems.map((dropItem, index) => {
          return (
            <div
              onClick={() => props.onSelect(dropItem)}
              key={index}
              className="box-start h-[36px] gap-2 pb-2 pl-[20px] pr-[20px] pt-2 text-size-primary hover:bg-[rgba(0,0,0,0.1)]"
            >
              {props.multiple && (
                <Checkbox
                  onClick={(e) => e.stopPropagation()}
                  defaultChecked={true}
                  onChange={(e) => {
                    if (e.target.checked) {
                      props.onSelect(dropItem);
                    } else {
                      props.onUnselect && props.onUnselect(dropItem);
                    }
                  }}
                />
              )}
              {dropItem.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
