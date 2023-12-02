import { useSearchParams } from "react-router-dom";

export const ProductsFeatured = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const products = [
    { name: "ternera", category: "meat", active: true },
    { name: "atun", category: "fish", active: true },
    { name: "tilapia", category: "fish", active: false },
    { name: "bisteck", category: "meat", active: true },
    { name: "cuadril", category: "meat", active: false },
  ];

  return (
    <div>
      <div>
        <span>Products featured</span>{" "}
        <button
          className="p-1 bg-gray-100"
          onClick={() => {
            setSearchParams({});
          }}
        >
          Reset all filters
        </button>
      </div>
      <div>
        <div>
          <div>Categorias</div>
          <div className="space-x-4">
            <button
              className="p-1 bg-gray-100"
              onClick={() => {
                searchParams.set("category", "meat");
                setSearchParams(searchParams);
              }}
            >
              {searchParams.get("category") === "meat" && <span>😀</span>}
              <span>meat</span>
            </button>
            <button
              className="p-1 bg-gray-100"
              onClick={() => {
                searchParams.set("category", "fish");
                setSearchParams(searchParams);
              }}
            >
              {searchParams.get("category") === "fish" && <span>😀</span>}
              <span>fish</span>
            </button>
          </div>
        </div>
        <div>
          <div>Activo</div>
          <div className="space-x-4">
            <button
              className="p-1 bg-gray-100"
              onClick={() => {
                if (searchParams.get("active")) {
                  searchParams.delete("active");
                  setSearchParams(searchParams);
                } else {
                  searchParams.set("active", "true");
                  setSearchParams(searchParams);
                }
              }}
            >
              {searchParams.get("active") && <span>😀</span>}
              <span>Activo</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        {products
          .filter((_) =>
            searchParams.get("category")
              ? _.category === searchParams.get("category")
              : true
          )
          .filter((_) =>
            searchParams.get("active")
              ? `${_.active}` === searchParams.get("active")
              : true
          )
          .map((_, index) => (
            <div key={index}>{_.name}</div>
          ))}
      </div>
    </div>
  );
};
