import { CloseIcon } from "../../assets/icon";

type TagType = {
  onRemove?: (val: string) => void;
  value: string;
};
function Tag(props: TagType) {
  return (
    <div className="center-item second gap-2 rounded-lg border-[1px] border-solid p-2">
      <span>{props.value}</span>
      <CloseIcon
        className="cursor-pointer"
        onClick={() => props.onRemove && props.onRemove(props.value)}
      />
    </div>
  );
}

export default Tag;
