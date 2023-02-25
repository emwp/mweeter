const Loading = () => {
  return (
    <div className="grid gap-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>
          <div className="grid grid-cols-[36px_max-content] place-items-center gap-3 p-4">
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-300" />
            <div className="h-3 w-[320px] animate-pulse bg-gray-300 xl:w-[420px]" />
          </div>
          <div className="ml-16 h-3 w-[320px] animate-pulse bg-gray-300 xl:w-[460px]" />
        </div>
      ))}
    </div>
  );
};

export default Loading;
