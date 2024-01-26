import { CheckboxChangeEvent } from "antd/es/checkbox";
import {
  DefaultThumbnailsPlaylist,
  PlayIcon,
  WarningIcon,
} from "../../assets/icon";
import Checkbox from "./Checkbox";
import { IPlaylist } from "../../Model/playlist.model";
import { imgAudioDefault } from "../../assets/icon/default_thumbnails_playslist";
import dayjs from "dayjs";
import Helper from "../../Helper";

type CardPlaylistProps = {
  data?: IPlaylist;
  selected?: boolean;
  selectMode?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
};
function CardPlaylist(props: CardPlaylistProps) {
  return (
    <div className="bg-fill relative min-h-[316px] overflow-hidden rounded-lg bg-modal bg-no-repeat ">
      <img
        className=" h-full w-full"
        src={props.data?.thumbnails ? props.data.thumbnails : imgAudioDefault}
      />

      <div className="center-item absolute left-0 right-0 top-0 h-1/2">
        <div className="m-auto w-fit rounded-full bg-[rgba(255,255,255,0.5)] p-4 backdrop-blur-md">
          <PlayIcon />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 min-h-[156px] bg-modal p-4">
        <h5 className="mb-2 text-size-primary font-semibold">
          {props.data?.title}
        </h5>
        <div className="box-start mb-2 mt-2 w-full gap-2">
          {props.data?.tags.map((it, index) => {
            return (
              <div
                key={index}
                className="rounded-lg border-[1px]  border-solid border-[#727288] p-2"
              >
                {it}
              </div>
            );
          })}
        </div>
        <div className="box-start gap-2">
          <h5>Người tạo:</h5>{" "}
          <span className="text-third">{props.data?.personCreated}</span>
        </div>
        <div className="box-start gap-2">
          <h5>Ngày tạo:</h5>{" "}
          <span className="text-third">
            {dayjs(props.data?.createAt).format("YYYY/MM/DD")}
          </span>
        </div>

        <div className="items-emd mb-2 mt-2 flex items-end justify-between">
          <div className="box-start gap-2">
            <div className="flex flex-col items-center justify-center rounded-md border-[1px] border-solid  border-[#595970] p-2 pl-2 pr-2">
              <span className="text-[8px] text-third">Số bản ghi</span>
              <h5>{props.data?.amountRecord}</h5>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md border-[1px] border-solid  border-[#595970] p-2 pl-2 pr-2">
              <span className="text-[8px] text-third">Thời lượng</span>
              <h5>
                {Helper.convertDurationToString(props.data?.totalDuration || 0)}
              </h5>
            </div>
          </div>

          {props.selectMode ? (
            <Checkbox checked={props.selected} onChange={props.onChange} />
          ) : (
            <WarningIcon color="#ff7506" />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardPlaylist;
