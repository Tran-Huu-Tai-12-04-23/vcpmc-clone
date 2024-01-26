import { useEffect, useState } from "react";
import Tag from "./Tag";

type EnterTagProps = {
  onChangeTag?: (tags: string[]) => void;
  defaultValue?: string[];
};
function EnterTag(props: EnterTagProps) {
  const [tags, setTags] = useState<string[]>(props.defaultValue || []);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (value.charAt(value.length - 1) === ",") {
      setValue("");
      setTags([...tags, value.substring(0, value.length - 1)]);
    }
  }, [value]);

  useEffect(() => {
    props.onChangeTag && props.onChangeTag(tags);
  }, [tags]);

  useEffect(() => {
    setTags(props.defaultValue || []);
  }, [props.defaultValue]);
  return (
    <div className="w-full rounded-lg border-[1px] border-solid border-second p-2">
      <div className="box-start w-full flex-wrap gap-4 p-2">
        {tags.map((tag, index) => {
          return (
            <Tag
              value={tag}
              key={index}
              onRemove={() => {
                setTags(tags.filter((t) => t !== tag));
              }}
            />
          );
        })}
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mt-2 w-full border-none border-transparent bg-transparent p-2 focus:border-transparent focus:outline-none focus:ring-0"
        placeholder="Nhập chủ đề..."
      />
    </div>
  );
}

export default EnterTag;
