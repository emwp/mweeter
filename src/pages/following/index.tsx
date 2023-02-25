import FollowUser from "~/components/FollowUser";
import BaseLayout from "~/components/Layout/BaseLayout";
import Loading from "./Loading";
import { api } from "~/utils/api";

const Following = () => {
  const { data, isLoading } = api.user.getFollowed.useQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BaseLayout>
      <div className="grid gap-5 p-4 sm:ml-64 md:p-16 ">
        <h1 className="text-2xl font-bold text-gray-900">People you follow</h1>

        <div className="grid gap-x-10 lg:grid-cols-500">
          {data?.map((user) => (
            <FollowUser key={user.id} user={user} type="unfollow" />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Following;
