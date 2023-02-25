import { type FC } from "react";
import Image from "next/image";
import { Mweet, type User } from "@prisma/client";
import { prefixHandle } from "~/utils/helpers/prefixHandle";

type Props = {
  mweet: Mweet & {
    user: Pick<User, "handle" | "name" | "image">;
  };
};

const Mweet: FC<Props> = ({ mweet }) => {
  const { user } = mweet;

  if (!user.handle || !user.name || !user.image) return null;

  return (
    <div className="grid grid-cols-[32px_1fr] gap-4">
      <Image
        alt="Profile Picture"
        className="mt-1 h-8 w-8 rounded-full"
        width={32}
        height={32}
        src={user.image}
      />
      <div className="grid">
        <div className="grid auto-cols-max grid-flow-col gap-4  ">
          <p className="font-semibold text-gray-900">{user.name}</p>
          <p className="text-gray-500">{prefixHandle(user.handle)}</p>
          <div className="grid grid-flow-col place-items-center gap-2">
            <span className="block h-1 w-1 rounded-full bg-gray-500" />
            <p className="text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }).format(mweet.createdAt)}
            </p>
          </div>
        </div>
        <div className="text-gray-500">{mweet.content}</div>
      </div>
    </div>
  );
};

export default Mweet;
