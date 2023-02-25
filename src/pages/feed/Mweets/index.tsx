import { useEffect } from "react";
import Mweet from "~/components/Mweet";
import useScroll from "~/hooks/useScroll";
import { api } from "~/utils/api";
import Loading from "./Loading";

const Mweets = () => {
  const { scrollPos } = useScroll();
  const { data, isLoading, hasNextPage, fetchNextPage, isFetching } =
    api.mweet.feed.useInfiniteQuery(
      { limit: 15 },
      { getNextPageParam: (lastPage) => lastPage.nextCursor }
    );

  useEffect(() => {
    if (scrollPos > 90 && hasNextPage && !isFetching) {
      void fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetching, scrollPos]);

  const mweets = data?.pages.flatMap((page) => page.mweets) ?? [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid gap-5">
      {mweets?.map((mweet) => (
        <Mweet key={mweet.id} mweet={mweet} />
      ))}
    </div>
  );
};

export default Mweets;
