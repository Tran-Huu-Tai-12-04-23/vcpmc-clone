import { AutoComplete as AutoCompleteAntd, AutoCompleteProps } from "antd";
import styled from "styled-components";

interface AutoCompleteCusProps extends AutoCompleteProps {
  width?: number;
  height?: number;
  options: any;
  defaultValue?: any;
  onSelect: (value: any) => void;
  onSearch?: (str: string) => void;
}

const AutoCompleteCustom = styled(AutoCompleteAntd)<AutoCompleteCusProps>`
  width: ${(props) => (props.width ? +props.width + "px" : "100%")};
  height: ${(props) => (props.height ? props.height + "px" : "48px")};
  font-weight: 400;
  font-size: var(--text-size-primary);
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${(props) =>
    props.variant === "outlined" ? "#67677d" : "transparent"};
  background-color: transparent !important;

  & .ant-select-selector,
  & .ant-input-affix-wrapper {
    color: white !important;
    background: #2b2b3f !important;
    box-shadow: none !important;

    border: solid;
    border-width: 1px;
    border-color: #67677d !important;
    &:focus,
    &:hover {
      border-color: #347aff !important;
    }
  }
  & svg {
    color: #ff7506;
    height: 24px;
    width: 24px;
  }

  .ant-select {
    border: none !important;
  }
  &:focus,
  &:hover {
    border-color: none !important;
  }
`;

function AutoComplete(props: AutoCompleteCusProps) {
  return (
    <AutoCompleteCustom
      onSearch={props.onSearch}
      onSelect={props.onSelect}
      placeholder={props.placeholder}
      options={props.options}
      defaultValue={props.defaultValue}
      value={props.value}
    />
  );
}

export default AutoComplete;
