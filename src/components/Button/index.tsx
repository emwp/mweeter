import { type FC } from "react";
import clsx from "clsx";
import ButtonContent from "./ButtonContent";

type Props = {
  loading: boolean;
  text: string;
  dotsColor: string;
  className?: string;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const defaultClass =
  "mt-5 grid h-12 w-max min-w-[180px] place-items-center rounded-md px-4 py-3 text-gray-50";

const Button: FC<Props> = ({
  loading,
  disabled,
  className,
  dotsColor,
  text,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={loading || disabled}
      className={clsx(
        (loading || disabled) && "cursor-not-allowed",
        defaultClass,
        className
      )}
    >
      <ButtonContent text={text} loading={loading} color={dotsColor} />
    </button>
  );
};

export default Button;
