import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { useSelector } from "react-redux";
import { RootState } from "../../State";
import styled from "styled-components";

const SpinCustom = styled(Spin)`
  .anticon svg {
    color: var(--primary);
  }
`;
function LoadingGlobal(props: { active?: boolean }) {
  const stateGlobal = useSelector((state: RootState) => state);

  console.log(stateGlobal);

  return (
    <>
      {(stateGlobal.authenticate.loading ||
        stateGlobal.userDetail.loading ||
        stateGlobal.records.loading ||
        stateGlobal.playlists.loading ||
        stateGlobal.contractMining.loading ||
        stateGlobal.contractAuthority.loading) && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000000] flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
          <SpinCustom
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          />
        </div>
      )}
    </>
  );
}

export default LoadingGlobal;
