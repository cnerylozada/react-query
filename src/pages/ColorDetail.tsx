import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getColorById } from "../services/colors";

export const ColorDetail = () => {
  const { colorId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["color", colorId],
    queryFn: ({ queryKey }) => getColorById(+(queryKey[1] as string)),
  });
  return (
    <div>
      <div>Color Detail {colorId}</div>
      {isLoading && <div>Loading ...</div>}
      <div>{data?.label}</div>
    </div>
  );
};
