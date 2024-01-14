import { CheckboxChangeEvent } from "antd/es/checkbox";
import { RecordColDataType } from "../../Page/store/_configTable";
import { EditIcon, PlayIcon } from "../../assets/icon";
import Checkbox from "./Checkbox";

type CardRecordProps = {
  data?: RecordColDataType;
  selected?: boolean;
  selectMode?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
};
function CardRecord(props: CardRecordProps) {
  return (
    <div className="bg-fill relative min-h-[316px] overflow-hidden rounded-lg bg-modal bg-no-repeat ">
      <img
        className=" h-full w-full"
        src={
          "https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=1024"
        }
      />
      <div className="center-item absolute left-0 right-0 top-0 h-1/2">
        <div className="m-auto w-fit rounded-full bg-[rgba(255,255,255,0.5)] p-4 backdrop-blur-md">
          <PlayIcon />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 min-h-[156px] bg-modal p-4">
        <h5 className="mb-2 text-size-primary font-semibold">
          Handcrafted Fresh Bacon Multy
        </h5>
        <div className="box-start gap-2">
          <h5> Ca sĩ:</h5> <span className="text-third">Bella Poarch</span>
        </div>
        <div className="box-start gap-2">
          <h5>Sáng tác:</h5> <span className="text-third">Leilani Zulauf</span>
        </div>
        <div className="box-start gap-2">
          <h5>Số hợp đồng:</h5> <span className="text-third">HD395738503</span>
        </div>

        <div className="items-emd mb-2 mt-2 flex items-end justify-between">
          <div className="box-start gap-4">
            <div className="rounded-md border-[1px]  border-solid border-[#595970] pl-2 pr-2">
              <span className="text-[8px] text-third">Thể loại</span>
              <h5>Pop</h5>
            </div>
            <div className="rounded-md border-[1px]  border-solid border-[#595970]  pl-2 pr-2">
              <span className="text-[8px] text-third">Định dạng</span>
              <h5>Audio</h5>
            </div>
            <div className="rounded-md border-[1px]  border-solid border-[#595970]  pl-2 pr-2">
              <span className="text-[8px] text-third">Thời lượng</span>
              <h5>3:00</h5>
            </div>
          </div>

          {props.selectMode ? (
            <Checkbox checked={props.selected} onChange={props.onChange} />
          ) : (
            <EditIcon color="#ff7506" />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardRecord;
