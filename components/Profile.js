import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
      <div className="w-[20rem] h-[20rem] rounded-md border border-gray-400 flex flex-col justify-center items-center gap-10">
        <div>
          <Image className="" src={profile.image} width={50} height={30} />
        </div>
        <h1 className="text-xl font-medium ">{profile.id}</h1>
      </div>
    </motion.div>
  );
}
