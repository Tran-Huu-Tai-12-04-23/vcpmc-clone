type TextLabelProps = {
  idInput?: string;
  children: React.ReactNode;
  width?: number;
  className?: string;
};

function TextLabel(props: TextLabelProps) {
  return (
    <label
      style={{
        width: props.width,
      }}
      className={`${props.className} block flex-shrink-0 text-size-primary font-bold text-white`}
      htmlFor={props.idInput}
    >
      {props.children}
    </label>
  );
}

export default TextLabel;
