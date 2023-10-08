import { useQuery } from "react-query";
import { getSuperHeroes } from "../services/superheroes";
import { ISuperHeroe } from "../models";

export const SuperHeroes = () => {
  const onSuccess = (data: ISuperHeroe[]) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (error: any) => {
    console.log("Perform side effect after encountering error", error);
  };

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery<
    ISuperHeroe[]
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
                id: {_.id} Name: {_.name} Alter ego: {_.alterEgo}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
