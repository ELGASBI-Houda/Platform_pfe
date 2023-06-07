import { motion, AnimatePresence } from "framer-motion";

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
          <img className="" src={profile.image} />
        </div>
        <h1 className="text-xl font-medium ">{profile.id}</h1>
      </div>
    </motion.div>
  );
}
