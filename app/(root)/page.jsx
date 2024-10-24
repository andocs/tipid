import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="flex flex-col items-center min-h-screen text-center py-16">
      <div className="flex flex-col gap-8 items-center mt-32">
        <h2 className="text-6xl font-black">Budget. Track. Save.</h2>
        <h2 className="text-3xl font-medium">Get smarter about your money</h2>
        <h3 className="text-sm font-light text-gray-500">
          Keep track of your income and expenses in one place!
        </h3>
        <Link
          href={"/sign-up"}
          className="btn btn-circle btn-sm btn-primary w-max px-8 flex gap-2"
        >
          Sign Up
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Home;
