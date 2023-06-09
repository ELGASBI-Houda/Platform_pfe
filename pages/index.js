import Head from "next/head";
import Typewriter from "typewriter-effect";
// import Event from "../public/event.jpg";
import Link from "next/link";
import { motion as m } from "framer-motion";
import Logo from "../public/logom.png";

export default function Home() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Orange Digital Center</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Logo} />
      </Head>
      <main className="bg-white overflow-y-hidden">
        <div className="max-w-[850px] mt-[-85px] w-full h-[750px] mx-auto text-center flex flex-col justify-center">
          <p className="text-orange-500 font-bold p-2">Welcome to the Club</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold  md:py-6">
            <span className="text-orange-500">Orange</span> Digital Center
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">
              Learn, Code & Make
            </p>
            {/* <Typed
              className="md:text-5xl sm:text-4xl text-xl text-orange-500 font-bold pl-2"
              strings={["#Innovation", "#Creativity", "#Success"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            /> */}
            <h1 className="md:text-5xl sm:text-4xl text-xl text-orange-500 font-bold pl-2">
              {" "}
              <Typewriter
                options={{
                  strings: ["#Innovation", "#Creativity", "#Success"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <p className="md:text-xl text-sm font-normal text-gray-600 mt-4">
            Comme to learn achieve and innovate a full equiped club with three
            special entities FabLab, Coding School, OrangeFab
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 mt-10 text-white ">
            <Link href={"/Profiles"}>Explore Profiles</Link>
          </button>
        </div>
      </main>
    </m.div>
  );
}
