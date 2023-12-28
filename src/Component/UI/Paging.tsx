import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../assets/icon';

type PagingType = {
    items: {
        name: string;
        path: string;
    }[];
};
function Paging(props: PagingType) {
    return (
        <div className="box-start">
            {props.items.map((it, index) => {
                return (
                    <>
                        <Link className="font-semibold text-size-primary text-[#F5F5FF]" key={index} to={it.path}>
                            {it.name}
                        </Link>
                        {index < props.items.length - 1 && <ArrowIcon color="#FFAC69"></ArrowIcon>}
                    </>
                );
            })}
        </div>
    );
}

export default Paging;
