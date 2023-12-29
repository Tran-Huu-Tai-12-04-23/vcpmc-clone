type TextLabelProps = {
  nameInput?: string;
  children: React.ReactNode;
};

function TextLabel(props: TextLabelProps) {
  return (
    <label
      className="block min-w-[150px] text-size-primary font-bold"
      htmlFor={props.nameInput}
    >
      {props.children}
    </label>
  );
}

export default TextLabel;
