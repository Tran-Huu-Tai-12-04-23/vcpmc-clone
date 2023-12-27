import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import { RootState } from '../../State';

function LoadingGlobal() {
    const stateGlobal = useSelector((state: RootState) => state);

    console.log(stateGlobal);
    return (
        <>
            {(stateGlobal.authenticate.loading || stateGlobal.userDetail.loading) && (
                <div className="fixed top-0 z-[1000000] bottom-0 right-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                </div>
            )}
        </>
    );
}

export default LoadingGlobal;
