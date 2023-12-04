import { useState } from "react";
import { useQuery } from "react-query";
import { getFriendById } from "../services/friends";

export const LazyFriendsPage = () => {
  const [friendId, setFriendId] = useState<string>("");
  const { data, isLoading, isFetching, refetch, isError, error } = useQuery({
    queryKey: ["friend", friendId],
    queryFn: ({ queryKey }) => {
      if (queryKey[1]) return getFriendById(+queryKey[1]);
    },
    enabled: !!friendId,
    retry: 1,
    onError: (error: { message?: string }) => error,
  });

  return (
    <div>
      <div>Lazy Friends by Id</div>
      <div>
        <input
          type="number"
          value={friendId}
          onChange={(_) => {
            setFriendId(_.target.value);
            refetch();
          }}
          disabled={isLoading || isFetching}
          className="border disabled:bg-gray-100"
        />
      </div>
      <div>Value: {friendId}</div>
      {isError && <div>Error message: {error?.message}</div>}
      {(isLoading || isFetching) && <div>Loading ...</div>}
      {!!data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};
