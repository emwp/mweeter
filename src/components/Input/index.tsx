import { type FC } from "react";

type Props = {
  label: string;
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: FC<Props> = ({ label, placeholder, ...rest }) => {
  return (
    <div className="max-w-xl">
      <label
        htmlFor="message"
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="text"
        className="block w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-900"
        placeholder={placeholder}
        {...rest}
      ></input>
    </div>
  );
};

export default Input;
