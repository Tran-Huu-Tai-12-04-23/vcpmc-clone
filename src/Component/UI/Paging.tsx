import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/icon";

type PagingType = {
  items: {
    name: string;
    path?: string;
  }[];
};
function Paging(props: PagingType) {
  return (
    <div className="box-start">
      {props.items.map((it, index) => {
        return (
          <div key={index} className="box-start">
            <Link
              className="text-size-primary font-semibold text-[#898997]"
              to={it.path ? it.path : ""}
            >
              {it.name}
            </Link>
            {index < props.items.length - 1 && (
              <ArrowIcon color="#8e654b"></ArrowIcon>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Paging;
