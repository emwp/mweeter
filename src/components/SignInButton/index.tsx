import clsx from "clsx";
import { type FC } from "react";
import { LoadingDots } from "../icons";

type Props = {
  children: React.ReactNode;
  isLoading: boolean;
  handleClick: () => void;
};

const SignInButton: FC<Props> = ({ children, isLoading, handleClick }) => {
  return (
    <button
      disabled={isLoading}
      className={clsx(
        isLoading && "cursor-not-allowed",
        "grid h-10 w-full grid-flow-col place-items-center gap-2 rounded-md border border-gray-200 px-4 text-sm shadow-sm  outline-none transition-all  duration-75 md:min-w-[184px]"
      )}
      onClick={handleClick}
    >
      {isLoading ? <LoadingDots color="#808080" /> : <>{children}</>}
    </button>
  );
};

export default SignInButton;
