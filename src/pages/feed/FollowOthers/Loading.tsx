import React from "react";

const Loading = () => {
  return (
    <div className="mt-0 grid h-fit p-4 px-3 lg:mt-16 lg:px-10 xl:px-32">
      <div className="h-4 w-40 animate-pulse bg-gray-300" />
      <div className="mt-4 grid grid-cols-[36px_max-content] place-items-center gap-3 border-t-[0.5px] border-gray-300/25 p-4">
        <div className="h-9 w-9 animate-pulse rounded-full bg-gray-300" />
        <div className="h-4 w-40 animate-pulse bg-gray-300 sm:w-[220] xl:w-[320px]" />
      </div>
      <div className="mt-4 grid grid-cols-[36px_max-content] place-items-center gap-3 border-t-[0.5px] border-gray-300/25 p-4">
        <div className="h-9 w-9 animate-pulse rounded-full bg-gray-300" />
        <div className="h-4 w-40 animate-pulse bg-gray-300 sm:w-[220] xl:w-[320px]" />
      </div>
      <div className="mt-4 grid grid-cols-[36px_max-content] place-items-center gap-3 border-t-[0.5px] border-gray-300/25 p-4">
        <div className="h-9 w-9 animate-pulse rounded-full bg-gray-300" />
        <div className="h-4 w-40 animate-pulse bg-gray-300 sm:w-[220] xl:w-[320px]" />
      </div>
    </div>
  );
};

export default Loading;
