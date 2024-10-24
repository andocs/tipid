import { useSession, signOut } from "next-auth/react";

import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="absolute top-0 w-full flex justify-between items-center px-8 h-[65px] border-b border-gray-700">
      <Link className="font-black text-2xl" href={"/"}>
        tipid.
      </Link>
      <div className="flex gap-2 items-center">
        {session ? (
          <>
            <p>Signed in as {session.user.email}</p>
            <button
              className="btn btn-sm btn-outline btn-error"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-sm btn-primary" href={"/sign-up"}>
              Sign Up
            </Link>
            <Link
              className="btn btn-sm btn-neutral"
              href={"/sign-in"}
            >
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
