import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSuperHeroeById } from "../services/superheroes";
import { ISuperHeroe } from "../models";

export const HeroDetailPage = () => {
  const { heroId } = useParams();
  const { data, isLoading } = useQuery<ISuperHeroe>(
    ["getSuperHeroeById", heroId],
    () => getSuperHeroeById(`${heroId}`)
  );

  return (
    <div>
      <div>HeroDetailPage </div>
      {isLoading && <div>Loading ...</div>}
      {data && (
        <div>
          id: {data.id} name: {data.name}
        </div>
      )}
    </div>
  );
};
