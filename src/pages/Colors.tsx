import { useQuery } from "react-query";
import { getAllColors } from "../services/colors";
import { Link } from "react-router-dom";

export const ColorsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all-colors"],
    queryFn: getAllColors,
  });
  return (
    <div>
      <div>Colors</div>
      {isLoading && <div>Loading ...</div>}
      <div className="space-y-4">
        {data?.map((_) => (
          <div key={_.id}>
            <div className="uppercase">{_.label}</div>
            <button className="p-1 bg-yellow-200 border rounded-sm hover:bg-yellow-400">
              <Link to={`./${_.id}`}>Go to detail</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
