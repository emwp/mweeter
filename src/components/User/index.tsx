import Image from "next/image";
import { api } from "~/utils/api";
import { prefixHandle } from "~/utils/helpers/prefixHandle";
import Loading from "./Loading";

const User = () => {
  const { data, isLoading } = api.user.current.useQuery();
  const { name, handle, lastName, image } = data ?? {};

  if (isLoading) {
    return <Loading />;
  }

  if (!handle || !name) return null;

  return (
    <div className="mt-4 grid grid-cols-[36px_max-content] place-items-center gap-4 border-t-[0.5px] border-gray-400/25 p-4">
      <Image
        alt="Profile Picture"
        className="h-9 w-9 rounded-full"
        width={36}
        height={36}
        src={image || "/default-profile.png"}
      />
      <div className="">
        <p className="font-medium text-gray-900">{`${name || ""} ${
          lastName || ""
        }`}</p>
        <p className="text-sm font-medium text-gray-500">
          {prefixHandle(handle || "")}
        </p>
      </div>
    </div>
  );
};

export default User;
