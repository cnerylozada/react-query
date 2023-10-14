import { useQuery } from "react-query";
import { getChannelById, getUserByEmail } from "../services/users";
import { IChannel, IUser } from "../models";

export const DependendQueriesPage = () => {
  const userEmail = "vishwas@example.com";
  const { data: user, isLoading: loadingUser } = useQuery<IUser>(
    ["user", userEmail],
    () => getUserByEmail(userEmail)
  );
  const channelId = user?.channelId;
  const { data: channel, isLoading: loadingChannel } = useQuery<IChannel>(
    ["channel", channelId],
    () => getChannelById(channelId as string),
    { enabled: !!channelId }
  );
  return (
    <div>
      <div>DependendQueries</div>
      {(loadingUser || loadingChannel) && <div>Loading ...</div>}

      {channel && (
        <div>
          <div>id: {channel.id}</div>
          <div>courses: {JSON.stringify(channel.courses)}</div>
        </div>
      )}
    </div>
  );
};
