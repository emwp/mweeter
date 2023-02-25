import { type FC } from "react";
import { LoadingDots } from "../icons";

type Props = {
  loading: boolean;
  color: string;
  text: string;
};

const ButtonContent: FC<Props> = ({ color, loading, text }) => {
  if (loading) {
    return <LoadingDots color={color} />;
  }

  return <span>{text}</span>;
};

export default ButtonContent;
