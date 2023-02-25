import clsx from "clsx";
import { useState } from "react";
import Button from "~/components/Button";
import { api } from "~/utils/api";

const NewMweet = () => {
  const [message, setMessage] = useState("");
  const { refetch } = api.mweet.feed.useQuery({ limit: 15 });
  const { mutate, isLoading } = api.mweet.new.useMutation({
    onSuccess: () => {
      setMessage("");
      void refetch();
    },
  });

  const handleSendMweet = () => mutate({ message });
  const overLimit = message.length > 280;

  return (
    <div className="grid gap-2">
      <div className="w-full">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Your message
        </label>
        <textarea
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          rows={4}
          className={clsx(
            overLimit && "border-2 border-red-500 outline-none",
            "block w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900"
          )}
          placeholder="Write your thoughts here..."
        />
        {overLimit && (
          <p className="text-sm text-red-500">
            Message limit is 280 characters
          </p>
        )}
      </div>
      <div className="grid w-full place-items-end">
        <Button
          className="w-max rounded-md bg-[#6A73C5] px-4 py-3 text-gray-50"
          onClick={handleSendMweet}
          loading={isLoading}
          disabled={overLimit || message.length === 0 || isLoading}
          text="Send Mweet"
          dotsColor="#e2e2e2"
        />
      </div>
    </div>
  );
};

export default NewMweet;
