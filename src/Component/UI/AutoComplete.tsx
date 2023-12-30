import { useState } from "react";
import { AutoComplete as AutoCompleteAntd, AutoCompleteProps } from "antd";
import styled from "styled-components";

interface AutoCompleteCusProps extends AutoCompleteProps {
  width?: number;
  height?: number;
}

const AutoCompleteCustom = styled(AutoCompleteAntd)<AutoCompleteCusProps>`
  width: ${(props) => (props.width ? +props.width + "px" : "100%")};
  height: ${(props) => (props.height ? props.height + "px" : "48px")};
  font-weight: 400;
  font-size: var(--text-size-primary);

  border-radius: 8px;
  color: white;
`;
function AutoComplete(props: AutoCompleteCusProps) {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );

  const handleSearch = (value: string) => {
    let res: { value: string; label: string }[] = [];
    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map((domain) => ({
        value,
        label: `${value}@${domain}`,
      }));
    }
    setOptions(res);
  };

  return (
    <AutoCompleteCustom
      onSearch={handleSearch}
      placeholder={props.placeholder}
      options={options}
      dropdownClassName="custom-autocomplete-dropdown"
    />
  );
}

export default AutoComplete;
