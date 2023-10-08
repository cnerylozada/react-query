import { useQuery } from "react-query";
import { getSuperHeroes } from "../services/superheroes";

export const SuperHeroes = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    "getSuperHeroes",
    getSuperHeroes,
    {
      retry: false,
      enabled: false,
    }
  );

  return (
    <div>
      <div>SuperHeroes page</div>
      <button
        onClick={() => {
          refetch();
        }}
      >
        Refetch
      </button>
      <div>
        {(isLoading || isFetching) && <div>Loading ...</div>}
        {isError && <div>{(error as any).message}</div>}
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
