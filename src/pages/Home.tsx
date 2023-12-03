import { useQuery } from "react-query";
import { getSuperHeroes } from "../services/superheroes";

export const HomePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: getSuperHeroes,
  });
  return (
    <div>
      <div>Welcome to Home page</div>
      {isLoading && <div>Loading ...</div>}
      <div>
        {data?.map((_) => (
          <div key={_.id}>{_.name}</div>
        ))}
      </div>
    </div>
  );
};
