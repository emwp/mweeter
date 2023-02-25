import BaseLayout from "~/components/Layout/BaseLayout";
import FollowOthers from "./FollowOthers";
import Mweets from "./Mweets";
import NewMweet from "./NewMweet";

const Feed = () => {
  return (
    <BaseLayout>
      <div className="grid grid-rows-2 gap-5 p-4 sm:ml-64 lg:grid-cols-2 lg:grid-rows-none lg:gap-20">
        <div className="grid gap-5 p-4">
          <h1 className="mt-2 text-2xl font-bold text-gray-900">Your Feed</h1>
          <NewMweet />
          <Mweets />
        </div>
        <FollowOthers />
      </div>
    </BaseLayout>
  );
};

export default Feed;
