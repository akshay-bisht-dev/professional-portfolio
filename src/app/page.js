import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-black to-slate-800">
        <div className="">
          <h4 className="text-2xl mb-3">
            Welcome to my <span className="text-yellow-500">Portfolio</span>
          </h4>
          <h1 className="text-5xl">
            AKSHAY <span className="text-yellow-500">BISHT</span> DEV
          </h1>

          <div className="flex gap-2 mt-4">
            <Link href="/" className="px-8 py-2 bg-slate-400 rounded-lg">
              Download Resume
            </Link>
            <Link
              href="./About"
              className="px-8 py-2 hover:bg-slate-400 rounded-lg transition-all duration-500"
            >
              Know more about me 😉
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
