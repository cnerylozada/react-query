import { useQuery } from "react-query";
import { getSuperHeroes } from "../services/superheroes";
import { ISuperHero } from "../models";
import { Link } from "react-router-dom";

export const SuperHeroesPage = () => {
  const onSuccess = (data: ISuperHero[]) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (error: any) => {
    console.log("Perform side effect after encountering error", error);
  };

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery<
    ISuperHero[]
  >("getSuperHeroes", getSuperHeroes, {
    retry: false,
    enabled: false,
    onSuccess,
    onError,
  });

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
                <div>
                  id: {_.id} Name: {_.name} Alter ego: {_.alterEgo}
                </div>
                <Link to={`/super-heroes/${_.id}`}>Go to detail</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
