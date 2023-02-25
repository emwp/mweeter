import Button from "~/components/Button";
import Input from "~/components/Input";
import { api } from "~/utils/api";
import BaseLayout from "~/components/Layout/BaseLayout";
import { useState } from "react";

const Profile = () => {
  const { data, refetch } = api.user.current.useQuery();
  const { mutate, isLoading } = api.user.updateProfile.useMutation({
    onSuccess: () => refetch(),
  });

  const [handle, setHandle] = useState<string>(data?.handle || "");
  const [name, setName] = useState<string>(data?.name || "");
  const [lastName, setLastName] = useState<string>(data?.lastName || "");

  const handleUpdate = () => mutate({ handle, name, lastName });

  return (
    <BaseLayout>
      <div className="grid grid-rows-2 gap-5 p-4 sm:ml-64 lg:grid-cols-2 lg:gap-20">
        <div className="grid gap-5 p-4">
          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            Your Profile
          </h1>

          <div className="grid gap-2">
            <div className="grid w-full max-w-xl grid-rows-2 gap-2 sm:grid-cols-2 sm:grid-rows-none sm:gap-4">
              <Input
                label="First Name"
                value={data?.name || name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Albert"
              />
              <Input
                label="Last Name"
                value={data?.lastName || lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Flores"
              />
            </div>
            <Input
              label="Your handle (username)"
              value={data?.handle || handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="aflores"
            />
            <Input
              label="Email address"
              disabled
              value={data?.email as string}
              placeholder="aflores@monogram.io"
            />
            <Button
              onClick={handleUpdate}
              loading={isLoading}
              text="Update Info"
              dotsColor="#e2e2e2"
              className="bg-[#6A73C5]"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Profile;
