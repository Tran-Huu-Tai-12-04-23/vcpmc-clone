import { Checkbox as CheckboxAntd, CheckboxProps, Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;

interface CheckboxPropsCustom extends CheckboxProps {
  label?: string;
}

function Checkbox(props: CheckboxPropsCustom) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: "max-content",
      }}
    >
      <CheckboxAntd
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
        {...props}
        id={props.id}
      ></CheckboxAntd>
      <Title
        level={5}
        style={{
          fontSize: "var(--text-size-primary)",
          color: "white",
          fontWeight: "400",
          marginBottom: 0,
        }}
      >
        {props.label}
      </Title>
    </div>
  );
}

export default Checkbox;
