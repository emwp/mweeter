import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState, type FC } from "react";
import Siderbar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const BaseLayout: FC<Props> = ({ children }) => {
  const { status } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      void push("/");
    }
  });

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => setIsSidebarVisible((prev) => !prev);

  return (
    <div>
      <button
        type="button"
        className="mt-2 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 outline-none hover:bg-gray-100 md:hidden"
        onClick={toggleSidebar}
      >
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <Siderbar
        isVisible={isSidebarVisible}
        toggleSidebar={isSidebarVisible ? toggleSidebar : () => null}
      />
      {children}
    </div>
  );
};

export default BaseLayout;
