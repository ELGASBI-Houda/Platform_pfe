import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  // const router = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="bg-white px-8 py-6 flex justify-between md:px-20 lg:px-30 overflow-y-hidden ">
      {/* <h1 className="text-3xl font-bold text-orange-400">
        Orange
         <span
          className="text-black
      "
        >
           Digital Center
        </span>
      </h1> */}
      <div className="text-2xl font-bold items-center">
        <Link href="/">
          <h1 className="text-orange-400">Orange</h1>
          <h1>Digital Center</h1>
        </Link>
      </div>

      <ul className="hidden md:flex gap-12 items-center textx-xl font-semibold ">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/About"> About our Event</Link>
        </li>

        <li className="bg-black mx-auto text-white px-4 py-2 rounded-md ml-8 font-medium">
          <Link href="/Profiles">Explore Profiles</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <GrFormClose size={30} className="mt-4" />
        ) : (
          <FiAlignRight size={30} className="mt-4" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full  bg-white border-r border-gray-400 ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <div className=" text-3xl font-bold items-center px-3 mt-8">
          <h1 className="text-orange-400">Orange</h1>
          <h1>Digital Center</h1>
        </div>
        <ul className="mx-auto p-4 pt-20 uppercase text-xl text-black font-medium">
          <li className="mb-4">
            <Link href={"/"}>Home</Link>
          </li>

          <li className="mb-4">
            <Link href={"/About"}>About our Event</Link>
          </li>

          <li className="mb-4">
            <Link href={"/Profiles"}>Explore Profiles</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
