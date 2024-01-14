import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import CancelIcon from "../../assets/icon/cancel";
import ModalBroadcastSchedule from "../../Page/schedule/edit/ModalBroadcastSchedule";
import ModalRemoveSchedule from "../../Page/schedule/edit/ModalRemoveSchedule";

function CalenderCustom() {
  const [isModalBroadcastSchedule, setIsModalBroadcastSchedule] =
    useState<boolean>(false);
  const [isModalRemoveSchedulePlay, setIsModalRemoveSchedulePlay] =
    useState<boolean>(false);
  const [today, setToday] = useState<number>(dayjs().day());
  const timeLine = [
    {
      name: "01:00",
      value: 1,
    },
    {
      name: "02:00",
      value: 2,
    },
    {
      name: "03:00",
      value: 3,
    },
    {
      name: "04:00",
      value: 4,
    },
    {
      name: "05:00",
      value: 5,
    },
    {
      name: "06:00",
      value: 6,
    },
    {
      name: "07:00",
      value: 7,
    },

    {
      name: "08:00",
      value: 8,
    },

    {
      name: "09:00",
      value: 9,
    },

    {
      name: "10:00",
      value: 10,
    },

    {
      name: "11:00",
      value: 11,
    },
    {
      name: "12:00",
      value: 12,
    },
    {
      name: "13:00",
      value: 13,
    },
    {
      name: "14:00",
      value: 14,
    },
    {
      name: "15:00",
      value: 15,
    },
    {
      name: "16:00",
      value: 16,
    },
  ];

  const days = [
    {
      key: 1,
      name: "Thứ hai",
    },
    {
      key: 2,
      name: "Thứ ba",
    },
    {
      key: 3,
      name: "Thứ tư",
    },
    {
      key: 4,
      name: "Thứ năm",
    },
    {
      key: 5,
      name: "Thứ sáu",
    },
    {
      key: 6,
      name: "Thứ bảy",
    },
    {
      key: 0,
      name: "Chủ nhật",
    },
  ];

  const schedule = [
    {
      namePlaylist: "Love songs",
      rangeTime: [6, 8],
      day: dayjs(),
    },
    {
      namePlaylist: "Love songs",
      rangeTime: [10, 12],
      day: dayjs(),
    },
  ];

  const renderEachItemLine = (
    day: {
      name: string;
      key: number;
    },
    listPlaylist: {
      namePlaylist: string;
      rangeTime: number[];
      day: Dayjs;
    }[],
  ) => {
    return (
      <>
        {timeLine.map((time, index) => {
          const playlist = listPlaylist.find(
            (pl) => pl.rangeTime[0] === time.value,
          );

          return (
            <div className="center-item relative h-[60px] w-full" key={index}>
              <div className="h-full w-full border-b-[1px] border-solid border-[#42425a]"></div>
              {playlist && (
                <div
                  onClick={() => setIsModalBroadcastSchedule(true)}
                  className="absolute left-0 right-0 top-0 z-50 flex h-[120px] w-full flex-col justify-center gap-2 rounded-xl bg-modal p-4"
                >
                  <CancelIcon
                    onClick={(e) => {
                      e && e.stopPropagation();
                      setIsModalRemoveSchedulePlay(true);
                    }}
                    className="absolute right-2 top-2 cursor-pointer text-primary"
                    color={"#FF7506"}
                  />
                  <h5 className="text-[18px] font-semibold text-second">
                    {playlist.namePlaylist}
                  </h5>
                  <h6 className="text-third">06:00:00 - 08:00:00</h6>
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="custom-scroll h-full overflow-auto rounded-xl bg-[#2a2a3b] p-6">
      <ModalRemoveSchedule
        onOk={function (): void {
          throw new Error("Function not implemented.");
        }}
        isOpen={isModalRemoveSchedulePlay}
        onCancel={() => setIsModalRemoveSchedulePlay(false)}
        scheduleId={""}
      />
      <ModalBroadcastSchedule
        isOpen={isModalBroadcastSchedule}
        onOk={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCancel={() => setIsModalBroadcastSchedule(false)}
        scheduleId={""}
      />
      <div className="h-full">
        <div className="flex min-h-full justify-between">
          <div className="mt-[80px] w-[85px] font-bold ">
            {timeLine.map((time, index) => {
              return (
                <div
                  className="flex min-h-[60px] items-center justify-center text-[14px] text-[#727288]"
                  key={index}
                >
                  <span className="">{time.name}</span>
                </div>
              );
            })}
          </div>
          <div className="flex w-full items-start justify-between  ">
            {days.map((day, index) => {
              const scheduleToday = schedule.filter(
                (d) => d.day.day() === day.key,
              );

              return (
                <div
                  key={index}
                  className={`${
                    day.key === today
                      ? "border-[1px] border-solid border-[#347AFF]  bg-[#33334c]"
                      : ""
                  } gap flex w-full flex-col pt-2 `}
                >
                  <div
                    className={`${
                      scheduleToday.length > 0
                        ? "text-[#7879f1]"
                        : "text-second"
                    } min-h-[80px] text-center font-semibold `}
                  >
                    {day.name}
                    {day.key === today && (
                      <div className="center-item mt-2 gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <span className="text-[12px] text-third">Hôm nay</span>
                      </div>
                    )}
                  </div>

                  {renderEachItemLine(day, scheduleToday)}
                </div>
              );
            })}
          </div>
        </div>
        M
      </div>
    </div>
  );
}

export default CalenderCustom;
