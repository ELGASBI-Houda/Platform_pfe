import Event from "../public/event.jpg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
export default function About() {
  return (
    <motion.main 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    exit={{ opacity: 0 }}
    className="bg-white">
      <AnimatePresence>
        {/* About page content */}
        <div className="w-full bg-white py-16 px-4 lg:mt">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            {/* text */}
            <div className="flex flex-col justify-center pl-8 md:mx-2">
              <p className="text-orange-400 font-bold md:text-xl">
                Recrutement Day
              </p>
              <h1 className="md:text-6xl sm:text-3xl text-4xl font-bold py-2">
                About Our Event
              </h1>
              <p className="font-normal text-lg py-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda quae quasi, tenetur, itaque vero sint illo dicta
                molestias, ipsa asperiores deserunt inventore.
              </p>
              <button className="bg-black w-[200px] rounded-md font-medium my-6  py-3 mt-10 text-white ">
                Check Profiles
              </button>
            </div>
            {/* img */}
            <Image
              className="w-[500px] mx-auto my-4 rounded-md md:w-[700px]"
              src={Event}
              alt="/"
            />
          </div>
        </div>
      </AnimatePresence>
    </motion.main>
  );
}
