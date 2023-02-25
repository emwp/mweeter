import { api } from "~/utils/api";

type Args = {
  userId: string;
  type?: "follow" | "unfollow";
};

const useFollowUser = ({ userId, type }: Args) => {
  const { refetch: refetchFollow } = api.user.getFollowed.useQuery();
  const { refetch: refetchUnfollow } = api.user.getUnfollowed.useQuery();

  const onMutationSuccess = () => {
    void refetchFollow();
    void refetchUnfollow();
  };

  const { mutate: unfollow, isLoading: isLoadingUnfollow } =
    api.user.unfollow.useMutation({
      onSuccess: onMutationSuccess,
    });

  const { mutate: follow, isLoading: isLoadingFollow } =
    api.user.follow.useMutation({
      onSuccess: onMutationSuccess,
    });

  const isLoading = isLoadingFollow || isLoadingUnfollow;

  const handleAction = () =>
    type === "unfollow"
      ? unfollow({ userId: userId })
      : follow({ userId: userId });

  return {
    isLoading,
    handleAction,
  };
};

export default useFollowUser;
