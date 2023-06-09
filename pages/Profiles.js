import { ProfileData } from "../ProfileData";
import { useEffect, useState } from "react";
import Profile from "@/components/Profile";
import { motion, AnimatePresence } from "framer-motion";

export default function Profiles() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(ProfileData);
    setCollection([...new Set(ProfileData.map((item) => item.titile))]);
  }, []);

  const Profile_filter = (itemData) => {
    const filterData = ProfileData.filter((item) => item.titile == itemData);
    setData(filterData);
  };
  return (
    <motion.main>
      {/* profiles */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="flex flex-col gap-5"
      >
        <AnimatePresence>
          <div className="px-2 my-10 ">
            <h1 className="md:text-4xl text-3xl font-bold py-2 pb-2">
              ODC Profiles
            </h1>
            <p className="font-normal text-xl py-1 ">
              Here are our talented and created interns to check!
            </p>
          </div>
// changed here px and row
          <div className="flex px-[-5px]">
            <ul className="flex flex-wrap gap-12 px-12 text-xl font-medium mx-auto pb-2">
              <li className="hover:text-orange-500">
                <button onClick={() => setData(ProfileData)}>All</button>
              </li>
              {collection.map((item) => (
                <li key={item.id} className="hover:text-orange-500">
                  <button
                    onClick={() => {
                      Profile_filter(item);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-wrap gap-10 justify-center items-center mt-2 mx-auto pb-2">
            {data.map((item) => (
              <div key={item.id} className="galleryItem">
                <Profile profile={item} />
                {/* <img src={item.image} /> */}
              </div>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </motion.main>
  );
}
