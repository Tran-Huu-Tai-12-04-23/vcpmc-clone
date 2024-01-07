import { Checkbox as CheckboxAntd, CheckboxProps, Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;

const CheckboxCustom = styled(CheckboxAntd)<CheckboxPropsCustom>`
  background: "transparent!important";
  font-weight: 400;
  font-size: var(--text-size-primary);
  border-color: transparent;
  &:focus,
  &:hover {
    border-color: #347aff;
    background-color: transparent;
  }

  .ant-checkbox-inner,
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-disabled .ant-checkbox-inner,
  .ant-checkbox-checked .ant-checkbox-inner::after,
  .ant-checkbox-disabled .ant-checkbox-inner::after {
    background-color: transparent;
    border-color: #347aff; /* Border color when unchecked */
    border-radius: 1.5px;
    border-width: 1.5px;
  }
`;

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
      <CheckboxCustom
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
        {...props}
        id={props.id}
      ></CheckboxCustom>
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
