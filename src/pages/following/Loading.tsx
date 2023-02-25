import BaseLayout from "~/components/Layout/BaseLayout";

const Loading = () => {
  return (
    <BaseLayout>
      <div className="grid gap-5 p-4 sm:ml-64 md:p-16 ">
        <div className="h-4 w-40 animate-pulse bg-gray-300 sm:w-[220] xl:w-[320px]" />
        <div className="grid gap-x-10 lg:grid-cols-500">
          <div className="mt-4 grid grid-cols-[36px_max-content] place-items-center gap-3 border-t-[0.5px] border-gray-300/25 p-4">
            <div className="h-9 w-9 animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-40 animate-pulse bg-gray-300 sm:w-[220] xl:w-[320px]" />
          </div>{" "}
          <div className="mt-4 grid grid-cols-[36px_max-content] place-items-center gap-3 border-t-[0.5px] border-gray-300/25 p-4">
            <div className="h-9 w-9 animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-40 animate-pulse bg-gray-300 sm:w-[220] xl:w-[320px]" />
          </div>{" "}
          <div className="mt-4 grid grid-cols-[36px_max-content] place-items-center gap-3 border-t-[0.5px] border-gray-300/25 p-4">
            <div className="h-9 w-9 animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-40 animate-pulse bg-gray-300 sm:w-[220] xl:w-[320px]" />
          </div>{" "}
          <div className="mt-4 grid grid-cols-[36px_max-content] place-items-center gap-3 border-t-[0.5px] border-gray-300/25 p-4">
            <div className="h-9 w-9 animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-40 animate-pulse bg-gray-300 sm:w-[220] xl:w-[320px]" />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Loading;
