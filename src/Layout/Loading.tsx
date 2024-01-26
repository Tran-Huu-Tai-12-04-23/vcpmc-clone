import { Spin } from "antd";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

const SpinCustom = styled(Spin)`
  .anticon svg {
    color: var(--primary);
  }
`;
function Loading() {
  return (
    <div className="center-item h-screen w-screen bg-main">
      <SpinCustom
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      />
    </div>
  );
}

export default Loading;
