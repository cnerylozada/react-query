import { useQuery } from "react-query";
import { getSuperHeroes } from "../services/superheroes";

export const SuperHeroes = () => {
  const { data, isLoading } = useQuery("getSuperHeroes", getSuperHeroes);

  return (
    <div>
      <div>SuperHeroes page</div>
      <div>
        {isLoading && <div>Loading ...</div>}
        {data?.length && (
          <div>
            {data.map((_) => (
              <div key={_.id}>
                id: {_.id} Name: {_.name} Alter ego: {_.alterEgo}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
