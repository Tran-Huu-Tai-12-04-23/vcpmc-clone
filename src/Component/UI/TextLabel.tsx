type TextLabelProps = {
  idInput?: string;
  children: React.ReactNode;
};

function TextLabel(props: TextLabelProps) {
  return (
    <label
      className="block min-w-[14rem] text-size-primary font-bold"
      htmlFor={props.idInput}
    >
      {props.children}
    </label>
  );
}

export default TextLabel;
