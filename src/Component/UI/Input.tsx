import { v4 as uuid } from "uuid";
import { Input as InputAntd, InputProps } from "antd";
import styled from "styled-components";
import { SearchIcon } from "../../assets/icon";

const CustomInputArea = styled(InputAntd.TextArea)<InputPropsCustom>`
  width: ${(props) => (props.width ? +props.width + "px" : "100%")};
  height: ${(props) => (props.height ? props.height + "px" : "100px")};
  font-weight: 400;
  font-size: var(--text-size-primary);
  border-radius: 8px;
  color: white;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => (props.bordered ? "#67677d" : "transparent")};
  ${(props) => (props.isError ? "border-color:#FF4747" : "")};

  &:focus,
  &:hover {
    border-color: #347aff;
  }
`;

const CustomInput = styled(InputAntd)<InputPropsCustom>`
  width: ${(props) => (props.width ? +props.width + "px" : "100%")};
  height: ${(props) => (props.height ? props.height + "px" : "48px")};
  font-weight: 400;
  font-size: var(--text-size-primary);

  border-radius: 8px;
  color: white;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => (props.bordered ? "#67677d" : "transparent")};
  ${(props) => (props.isError ? "border-color:#FF4747" : "")};

  &:focus,
  &:hover {
    border-color: #347aff;
  }
`;
const CustomInputPassword = styled(InputAntd.Password)<InputPropsCustom>`
  width: ${(props) => (props.width ? +props.width + "px" : "100%")};
  height: ${(props) => (props.height ? props.height + "px" : "48px")};
  font-weight: 400;
  font-size: var(--text-size-primary);
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => (props.bordered ? "#67677d" : "transparent")};
  ${(props) => (props.isError ? "border-color:#FF4747" : "")};
  border-radius: 8px;

  & .ant-input-affix-wrapper {
    background-color: transparent;
    border: none;
  }
  & svg {
    color: #ff7506;
    height: 24px;
    width: 24px;
  }

  &:focus,
  &:hover {
    border-color: #347aff !important;
  }
`;

interface InputPropsCustom extends InputProps {
  label?: string;
  isError?: boolean;
  readOnly?: boolean;
  isEdit?: boolean;
  search?: boolean;
  type?: string;
  bordered?: boolean;
}
function Input({ search, isEdit, ...props }: InputPropsCustom) {
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
      {props.type === "area" ? (
        <CustomInputArea
          id={props.id ? props.id : id}
          {...props}
          placeholder={props.placeholder}
          isError={props.isError}
          name={props.name}
        />
      ) : props.type === "password" ? (
        <CustomInputPassword
          id={props.id ? props.id : id}
          {...props}
          placeholder={props.placeholder}
          isError={props.isError}
          name={props.name}
        />
      ) : (
        <CustomInput
          id={props.id ? props.id : id}
          suffix={search && <SearchIcon />}
          {...props}
          placeholder={props.placeholder}
          isError={props.isError}
        />
      )}

      {(props.readOnly || isEdit) && (
        <div className="absolute bottom-0 left-0 right-0 top-0 "></div>
      )}
    </div>
  );
}

export default Input;
