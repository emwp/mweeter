import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, type FC, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
  const { status } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      void push("/feed");
    }
  });

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
