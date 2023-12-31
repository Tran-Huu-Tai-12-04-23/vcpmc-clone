type PropsType = {
  statusIndex: number;
};
function UseStatusContract(props: PropsType) {
  const color = ["#18e306", "#347aff", "#878890", "#ff4747"];
  const nameStatus = ["Mới", "Còn thời hạn", "Đã hết hạn", "Đã hủy"];
  return (
    <div className="box-start gap-2">
      <div
        className="h-[8px] w-[8px] rounded-full"
        style={{
          background: color[props.statusIndex],
        }}
      ></div>
      <h5 className="text-third text-size-primary">
        {nameStatus[props.statusIndex]}
      </h5>
    </div>
  );
}

export default UseStatusContract;
