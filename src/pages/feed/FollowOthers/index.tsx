import FollowUser from "~/components/FollowUser";
import { api } from "~/utils/api";
import Loading from "./Loading";

const FollowOthers = () => {
  const { data, isLoading } = api.user.getUnfollowed.useQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-0 grid h-fit gap-3 p-4 px-3 lg:mt-16 lg:px-10 xl:px-32">
      <h2 className="mt-2 text-xl font-bold text-gray-900">Follow Others</h2>
      <div className="grid h-fit">
        {data?.map((user) => (
          <FollowUser user={user} key={user.id} type="follow" />
        ))}
      </div>
    </div>
  );
};

export default FollowOthers;
