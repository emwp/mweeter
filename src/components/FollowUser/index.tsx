import { type FC } from "react";
import Image from "next/image";
import { type User } from "@prisma/client";
import { LoadingDots } from "../icons";
import useFollowUser from "./useFollowUser";

type Props = {
  user: User;
  type?: "follow" | "unfollow";
};

const FollowUser: FC<Props> = ({ user, type }) => {
  const { isLoading, handleAction } = useFollowUser({ type, userId: user.id });
  const { image, handle, name } = user ?? {};

  if (!handle || !name || !image) return null;

  return (
    <div className="grid max-w-[440px] grid-cols-[32px_1fr] gap-4 border-t-[0.5px] py-5">
      <Image
        alt="Profile Picture"
        className="h-8 w-8 rounded-full"
        width={32}
        height={32}
        src={image}
      />
      <div className="grid h-fit grid-cols-2">
        <div className="grid auto-cols-max grid-flow-row">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-gray-500">{`@${handle}`}</p>
        </div>
        <button
          disabled={isLoading}
          onClick={() => void handleAction()}
          className="grid h-7 w-fit min-w-[100px] place-items-center self-center justify-self-end rounded-xl border px-2 text-end text-sm font-medium"
        >
          {isLoading ? (
            <LoadingDots color="#e2e2e2" />
          ) : (
            <span> {type === "follow" ? "Follow" : "Unfollow"} </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default FollowUser;
