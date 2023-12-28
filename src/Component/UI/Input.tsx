import { Input as InputAntd, InputProps, Typography } from "antd";
import styled from "styled-components";
import { SearchIcon } from "../../assets/icon";

const CustomInput = styled(InputAntd)<InputPropsCustom>`
  width: ${(props) => (props.width ? +props.width + "px" : "100%")};
  height: ${(props) => (props.height ? props.height + "px" : "100%")};
  font-weight: 400;
  font-size: var(--text-size-primary);
  border-color: ${(props) => (props.isError ? "#FF4747" : "transparent")};
  border-radius: 8px;
  color: white;

  &:focus,
  &:hover {
    border-color: #347aff;
  }
`;
const CustomInputPassword = styled(InputAntd.Password)<InputPropsCustom>`
  width: ${(props) => (props.width ? +props.width + "px" : "100%")};
  height: ${(props) => (props.height ? props.height + "px" : "100%")};
  font-weight: 400;
  font-size: var(--text-size-primary);
  border-color: ${(props) => (props.isError ? "#FF4747" : "#727288")};

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
    border-color: #347aff;
  }
`;

interface InputPropsCustom extends InputProps {
  label?: string;
  isError?: boolean;
  readOnly?: boolean;
  isEdit?: boolean;
  search?: boolean;
}
function Input({ search, isEdit, ...props }: InputPropsCustom) {
  return (
    <div className={`relative w-full `}>
      {props.label && (
        <Typography.Title
          level={5}
          style={{
            margin: 0,
            fontSize: "var(--text-size-primary)",
            color: "#94949b",
            marginBottom: "4px",
            fontWeight: "600",
          }}
        >
          {props.label}
        </Typography.Title>
      )}

      {props.type === "password" ? (
        <CustomInputPassword
          {...props}
          placeholder={props.placeholder}
          isError={props.isError}
        />
      ) : (
        <CustomInput
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
