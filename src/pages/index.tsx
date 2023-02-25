import { Google, Microsoft, Twitter } from "~/components/icons";
import { signIn } from "next-auth/react";
import { useState } from "react";
import AuthLayout from "~/components/Layout/AuthLayout";
import SignInButton from "~/components/SignInButton";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    void signIn("auth0");
  };

  return (
    <AuthLayout>
      <section className="grid h-max place-items-center gap-4">
        <Twitter className="h-10 w-10" />
        <h1 className="mt-2 text-[1.5rem] font-extrabold leading-[1.65rem] text-gray-800">
          Mweeter
        </h1>
        <div className="grid w-full min-w-full grid-cols-2 gap-4">
          <SignInButton handleClick={handleClick} isLoading={isLoading}>
            <Google className="h-5 w-5" />
            <p>Sign In with Google</p>
          </SignInButton>
          <SignInButton handleClick={handleClick} isLoading={isLoading}>
            <Microsoft className="h-5 w-5" />
            <p>Sign In with Microsoft</p>
          </SignInButton>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Home;
