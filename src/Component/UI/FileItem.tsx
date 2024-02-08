import { File } from "../../Model/contractMining.model";
import { WordIcon } from "../../assets/icon";
import CancelIcon from "../../assets/icon/cancel";

type FileItemProps = {
  data: File;
  onRemove?: (item: File) => void;
};
function FileItem(props: FileItemProps) {
  return (
    <div className="box-start min-w-[10rem] gap-2">
      <WordIcon />
      <h5 className="max-w-[12rem] truncate">{props.data.name}</h5>
      {props.onRemove && (
        <CancelIcon
          className="cursor-pointer"
          onClick={() => {
            props.onRemove && props.onRemove(props.data);
          }}
        />
      )}
    </div>
  );
}

export default FileItem;
