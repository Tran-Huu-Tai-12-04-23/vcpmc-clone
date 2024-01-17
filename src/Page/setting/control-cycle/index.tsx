import { Flex, Radio } from "antd";
import {
  Button,
  DatePicker,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import { useRouter } from "../../../Routes/hooks";
import { useEffect, useState } from "react";
import { SuccessIcon } from "../../../assets/icon";
const PagingItems = [
  {
    name: "Trang chủ",
  },
  {
    name: "Cài đặt hệ thống",
  },
  {
    name: "Thông tin tác phẩm",
  },
];
const QuarterList = [
  "01/06 - 30/07",
  "01/08 - 30/09",
  "01/10 - 30/11",
  "01/12 - 31/12",
];
function ControlCycle() {
  const router = useRouter();
  const [isNotification, setIsNotification] = useState(false);
  const [typeForControl, setTypeForControl] = useState<"quarter" | "month">(
    "quarter",
  );
  useEffect(() => {
    let countNotification: NodeJS.Timeout;

    if (isNotification) {
      countNotification = setTimeout(() => {
        setIsNotification(false);
      }, 1000);
    }

    return () => {
      clearTimeout(countNotification);
    };
  }, [isNotification]);
  return (
    <div className="w-full pr-24">
      <Paging items={PagingItems} />
      <TextHeader>Cài đặt hệ thống</TextHeader>

      <div className="mt-10 min-h-[550px] w-full rounded-xl bg-table p-10">
        <h5 className="text-[24px] font-semibold">Cài đặt chu kì đối soát</h5>

        <Flex vertical gap={20} className="mt-10">
          <Radio
            value={"quarter"}
            checked={typeForControl === "quarter"}
            onChange={(e) => {
              if (e.target.checked) {
                setTypeForControl("quarter");
              }
            }}
          >
            Đối soát theo qúy
          </Radio>
          {typeForControl === "quarter" && (
            <div className="flex flex-col gap-4 pl-10">
              {QuarterList.map((q, index) => {
                return (
                  <div className="box-start gap-4" key={index}>
                    <h5 className="font-bold">Quý {index + 1}</h5>
                    <h5 className="text-third">{q}</h5>
                  </div>
                );
              })}
            </div>
          )}
          <Radio
            value={"month"}
            checked={typeForControl === "month"}
            onChange={(e) => {
              if (e.target.checked) {
                setTypeForControl("month");
              }
            }}
          >
            Đối soát theo tháng
          </Radio>
          {typeForControl === "month" && (
            <div className="box-start gap-10">
              <TextLabel>Ngày bắt đầu:</TextLabel>
              <DatePicker bordered width={200} />
              <TextLabel>Ngày kết thúc:</TextLabel>
              <DatePicker bordered width={200} />
            </div>
          )}
        </Flex>
      </div>
      <div className="center-item mt-10 gap-10">
        <Button
          onClick={() => {
            setIsNotification(true);
          }}
          typebtn="primary"
          sizetype="hug"
        >
          Lưu
        </Button>
      </div>

      {isNotification && (
        <div className="fixed bottom-10 left-1/2 flex h-fit w-[] -translate-x-1/2 items-center justify-center rounded-[12px] bg-toast pb-[16px] pl-[24px] pr-[24px] pt-[16px] transition-all">
          <SuccessIcon />
          <h6 className="ml-[16px] text-[18px] font-medium">
            Lưu cài đặt chu kỳ đối soát thành công
          </h6>
        </div>
      )}
    </div>
  );
}

export default ControlCycle;
