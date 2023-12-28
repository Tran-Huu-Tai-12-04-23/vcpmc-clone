import { useState } from 'react';
import { Paging, SwitchTab, TextHeader } from '../../../Component';
import FloatingActionButton from '../../../Component/UI/FloatingActionButton';
import { AddIcon } from '../../../assets/icon';
import ContractAuthority from './contract-authority';
const pagingItems = [
    {
        name: 'Quản lý',
        path: '',
    },
    {
        name: 'Quản lý hợp đồng',
        path: '',
    },
];

function ManagerContract() {
    const [activeTab, setActiveTab] = useState<number>(1);
    const floatingButtons = [{ name: 'Thêm hợp đồng', icon: <AddIcon />, action: () => {} }];

    return (
        <div>
            <FloatingActionButton floatingActionButtonConfig={floatingButtons} />
            <Paging items={pagingItems} />
            <TextHeader>Danh sách hợp đồng</TextHeader>
            <SwitchTab
                className={'mt-[41px] mb-[41px]'}
                active={activeTab}
                buttons={[
                    {
                        name: 'Hợp đồng ủy quyền',
                        action: () => {
                            setActiveTab(1);
                        },
                        key: 1,
                    },
                    {
                        name: 'Hợp đồng khai thác',
                        action: () => {
                            setActiveTab(2);
                        },
                        key: 2,
                    },
                ]}
            />
            {activeTab === 1 ? <ContractAuthority /> : ''}
        </div>
    );
}

export default ManagerContract;
