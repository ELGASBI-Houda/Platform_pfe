import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GrInherit } from "react-icons/gr";

export default function Profile({ profile }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <div className="w-[20rem] h-[20rem] rounded-md border border-gray-400 flex flex-col justify-center items-center gap-9">
        <div>
          <Image
            className="rounded-full w-[130px] h-[130px] object-cover"
            src={profile.img}
            width={100}
            height={90}
            alt="profile image"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-medium capitalize">{profile.name}</h1>
          <p className="textx-xl font-medium capitalize text-orange-500">
            {profile.spec}
          </p>
        </div>
        <div className="flex gap-6">
          <Link href={profile.cv}>
            <p className="border border-orange-500 textx-xl text-orange-500 p-2 font-medium mx-auto rounded-lg hover:bg-orange-500 hover:text-white">
              Resume
            </p>
          </Link>
          <Link href={profile.portfolio}>
            <p className="bg-black textx-xl text-white p-2 font-normal mx-auto rounded-lg">
              Portfolio
            </p>
          </Link>
          {/* <button>Portfolio</button>
          <button>Resume</button> */}
        </div>
      </div>
    </motion.div>
  );
}
