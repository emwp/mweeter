const Loading = () => {
  return (
    <div className="mt-4 grid grid-cols-[36px_max-content] place-items-center gap-4 border-t-[0.5px] border-gray-300/25 p-4">
      <div className="h-9 w-9 animate-pulse rounded-full bg-gray-300" />
      <div className="h-4 w-32 animate-pulse bg-gray-300" />
    </div>
  );
};

export default Loading;
