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
  selectedItem?: { name: string; key: number }[];
  onSelect: (value: { name: string; key: number }) => void;
  className?: string;
  classDropItem?: string;
  width?: string;
  multiple?: boolean;
  onUnselect?: (value: { name: string; key: number }) => void;
  height?: any;
  backgroundDrop?: string;
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
        color: "white",
      }}
      className={`relative ${!props.width && "w-max"}  cursor-pointer  ${
        props.className
      } `}
    >
      <div
        style={{
          height: props.height ? props.height : "",
        }}
        className={`${
          props.classDropItem ? props.classDropItem : "border-primary bg-main"
        } relative ${active ? "z-[100000]" : "z-[50]"} flex h-[40px] ${
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
      <div
        className={`z-[51] h-0 w-full overflow-hidden ${
          props.backgroundDrop ? "" : "bg-modal "
        }`}
        style={{
          background: props.backgroundDrop,
        }}
      >
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
        style={{
          background: props.backgroundDrop,
        }}
        className={`z-[51]  ${active ? "" : "hidden "} ${
          props.backgroundDrop ? "" : "bg-modal "
        }custom-scroll absolute max-h-[10rem] w-full -translate-y-2 overflow-auto rounded-[8px] pb-[0.5rem]  pt-[0.5rem]`}
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
                  checked={
                    !!props.selectedItem?.find(
                      (it) => it.name === dropItem.name,
                    )
                  }
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
