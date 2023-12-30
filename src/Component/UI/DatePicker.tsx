import { v4 as uuid } from "uuid";
import { DatePicker as DatePickerAntd, DatePickerProps } from "antd";
import styled from "styled-components";
import { CalenderIcon } from "../../assets/icon";

const DatePickerCustom = styled(DatePickerAntd)<DatePickerCustomProps>`
  width: "100%";
  border-radius: "8px";
  background: transparent;
  color: white;
  background: #2b2b3f;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => (props.bordered ? "#67677d" : "transparent")};

  .anticon-close-circle {
    display: none;
  }
  .ant-picker-input {
    width: ${(props) => (props.width ? +props.width + "px" : "100%")};
    height: ${(props) => (props.height ? props.height + "px" : "40px")};

    input {
      color: white;
    }
    span {
      color: white;
    }
  }
`;

type DatePickerCustomProps = DatePickerProps & {
  width?: number;
  height?: number;
  label?: string;
  isError?: boolean;
  isPassword?: boolean;
  readOnly?: boolean;
  isEdit?: boolean;
  name?: string;
};

function DatePicker(props: DatePickerCustomProps) {
  const id = uuid();
  return (
    <div className={`relative w-full `}>
      {props.label && (
        <label
          htmlFor={id}
          style={{
            display: "block",
            margin: 0,
            fontSize: "var(--text-size-primary)",
            color: "#94949b",
            marginBottom: "4px",
            fontWeight: "600",
          }}
        >
          {props.label}
        </label>
      )}
      <DatePickerCustom
        id={props.id ? props.id : id}
        name={props.name}
        onChange={props.onChange}
        format={"DD/MM/YYYY"}
        suffixIcon={<CalenderIcon color={"#ff7506"} />}
        placeholder={props.placeholder ? props.placeholder : "dd/mm/yy"}
        {...props}
      />
      {(props.readOnly || props.isEdit) && (
        <div className="absolute bottom-0 left-0 right-0 top-0 "></div>
      )}
    </div>
  );
}

export default DatePicker;
