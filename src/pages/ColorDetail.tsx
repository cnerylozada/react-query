import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getColorById } from "../services/colors";

export const ColorDetail = () => {
  const { colorId } = useParams();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["color", colorId],
    queryFn: ({ queryKey }) => getColorById(+(queryKey[1] as string)),
    enabled: false,
  });
  return (
    <div>
      <div>Color Detail {colorId}</div>
      <div>
        <button
          className="p-1 bg-blue-100 hover:bg-blue-200 border rounded-sm"
          onClick={() => {
            refetch();
          }}
        >
          Fetch color by id
        </button>
      </div>
      {isLoading && <div>Loading ...</div>}
      <div>{data?.label}</div>
    </div>
  );
};
