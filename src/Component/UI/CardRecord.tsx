import { CheckboxChangeEvent } from "antd/es/checkbox";
import { EditIcon, PlayIcon } from "../../assets/icon";
import Checkbox from "./Checkbox";
import { IRecord } from "../../Model/record.model";
import Helper from "../../Helper";

type CardRecordProps = {
  data: IRecord;
  selected?: boolean;
  selectMode?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
};
function CardRecord(props: CardRecordProps) {
  return (
    <div className="bg-fill relative min-h-[316px] overflow-hidden rounded-lg bg-modal bg-no-repeat ">
      <img className=" h-full w-full" src={props.data.thumbnails} />
      <div className="center-item absolute left-0 right-0 top-0 h-1/2">
        <div className="m-auto w-fit rounded-full bg-[rgba(255,255,255,0.5)] p-4 backdrop-blur-md">
          <PlayIcon />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 min-h-[156px] bg-modal p-4">
        <h5 className="mb-2 text-size-primary font-semibold">
          {props.data.nameRecord}
        </h5>
        <div className="box-start gap-2">
          <h5> Ca sĩ:</h5>{" "}
          <span className="text-third">{props.data.single}</span>
        </div>
        <div className="box-start gap-2">
          <h5>Sáng tác:</h5>{" "}
          <span className="text-third">{props.data.author}</span>
        </div>
        <div className="box-start gap-2">
          <h5>Số hợp đồng:</h5>{" "}
          <span className="text-third">{props.data.numberContract}</span>
        </div>

        <div className="items-emd mb-2 mt-2 flex items-end justify-between">
          <div className="box-start gap-4">
            <div className="rounded-md border-[1px]  border-solid border-[#595970] pl-2 pr-2">
              <span className="text-[8px] text-third">Thể loại</span>
              <h5>{props.data.genre}</h5>
            </div>
            <div className="rounded-md border-[1px]  border-solid border-[#595970]  pl-2 pr-2">
              <span className="text-[8px] text-third">Định dạng</span>
              <h5>
                {props.data.format.charAt(0).toUpperCase() +
                  props.data.format.substring(1).toLowerCase()}
              </h5>
            </div>
            <div className="rounded-md border-[1px]  border-solid border-[#595970]  pl-2 pr-2">
              <span className="text-[8px] text-third">Thời lượng</span>
              <h5>{Helper.convertDurationToString(props.data.duration)}</h5>
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
