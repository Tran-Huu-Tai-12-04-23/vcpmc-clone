type TextLabelProps = {
  idInput?: string;
  children: React.ReactNode;
  width?: number;
};

function TextLabel(props: TextLabelProps) {
  return (
    <label
      style={{
        width: props.width,
      }}
      className="block flex-shrink-0 text-size-primary font-bold"
      htmlFor={props.idInput}
    >
      {props.children}
    </label>
  );
}

export default TextLabel;
