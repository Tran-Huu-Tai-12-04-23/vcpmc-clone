function EnterTag() {
  return (
    <div className="w-full rounded-lg border-[1px] border-solid p-2">
      <div className="box-start w-full flex-wrap gap-2 p-2"></div>

      <input
        className="mt-2 w-full border-none border-transparent bg-transparent p-2 focus:border-transparent focus:outline-none focus:ring-0"
        placeholder="Nhập chủ đề..."
      />
    </div>
  );
}

export default EnterTag;
