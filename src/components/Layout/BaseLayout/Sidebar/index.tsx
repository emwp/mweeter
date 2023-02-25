import clsx from "clsx";
import { signOut } from "next-auth/react";
import { type FC } from "react";
import {
  FaHome,
  FaThumbsUp,
  FaSmileWink,
  FaArrowCircleRight,
} from "react-icons/fa";
import User from "~/components/User";
import useOnClickOutside from "~/hooks/useOnClickOutside";
import SideItem from "./SideItem";

type Props = {
  isVisible: boolean;
  toggleSidebar: () => void;
};

const Siderbar: FC<Props> = ({ isVisible, toggleSidebar }) => {
  const { elementRef } = useOnClickOutside({ handler: toggleSidebar });

  return (
    <aside
      ref={elementRef}
      id="default-sidebar"
      className={clsx(
        !isVisible && "-translate-x-full",
        "fixed top-0 left-0 z-40 h-screen w-64  transition-transform sm:translate-x-0"
      )}
    >
      <div className="h-full overflow-y-auto bg-[#f3f4f6] px-3 py-4">
        <ul className="space-y-2">
          <SideItem name="Home" href="/feed">
            <FaHome />
          </SideItem>
          <SideItem name="Following" href="/following">
            <FaThumbsUp />
          </SideItem>
          <SideItem name="Profile" href="/profile">
            <FaSmileWink />
          </SideItem>
          <li>
            <span
              onClick={() => void signOut()}
              className="grid cursor-pointer auto-cols-max grid-flow-col place-items-center gap-4 rounded-lg p-2 text-base font-medium text-gray-600 hover:bg-gray-300"
            >
              <FaArrowCircleRight />
              <span className="">Log Out</span>
            </span>
          </li>
        </ul>
        <User />
      </div>
    </aside>
  );
};

export default Siderbar;
