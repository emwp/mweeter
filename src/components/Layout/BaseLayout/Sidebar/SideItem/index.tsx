import { type FC } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  href: string;
  name: string;
};

const SideItem: FC<Props> = ({ children, href, name }) => {
  return (
    <>
      <li>
        <Link
          onClick={href === "/" ? () => void signOut() : () => void null}
          href={href}
          className="grid auto-cols-max grid-flow-col place-items-center gap-4 rounded-lg p-2 text-base font-medium text-gray-600 hover:bg-gray-300"
        >
          {children}
          <span className="">{name}</span>
        </Link>
      </li>
    </>
  );
};

export default SideItem;
