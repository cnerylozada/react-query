import { useParams } from "react-router-dom";
import { useGetHeroById } from "../hooks";

export const HeroDetailPage = () => {
  const { heroId } = useParams();
  const { data, isLoading } = useGetHeroById(heroId as string);

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
