import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../assets/icon';

type DropdownType = {
    dropItems: {
        name: string;
        path: string;
        action: () => void;
    }[];
};
function Dropdown(props: DropdownType) {
    return <div className="box-start"></div>;
}

export default Dropdown;
