import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import { RootState } from '../../State';
import styled from 'styled-components';

const SpinCustom = styled(Spin)`
    .anticon svg {
        color: var(--primary);
    }
`;
function LoadingGlobal() {
    const stateGlobal = useSelector((state: RootState) => state);

    return (
        <>
            {(stateGlobal.authenticate.loading || stateGlobal.userDetail.loading) && (
                <div className="fixed top-0 z-[1000000] bottom-0 right-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
                    <SpinCustom indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                </div>
            )}
        </>
    );
}

export default LoadingGlobal;
