import { useQuery, useQueryClient } from "react-query";
import { ISuperHero } from "./models";
import { getSuperHeroeById } from "./services/superheroes";

export const useGetHeroById = (heroId: string) => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<ISuperHero>(
    ["getSuperHeroeById", heroId],
    () => getSuperHeroeById(`${heroId}`),
    {
      initialData: () => {
        const hero = queryClient
          .getQueryData<ISuperHero[]>("getSuperHeroes")
          ?.find((_) => _.id === +heroId);

        return hero ? hero : undefined;
      },
    }
  );
  return { data, isLoading };
};
