type TextHeaderProps = {
    children: React.ReactNode;
};
function TextHeader(props: TextHeaderProps) {
    return <h1 className="text-white text-size-header font-semibold">{props.children}</h1>;
}

export default TextHeader;
