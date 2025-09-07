"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProfilePhoto = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.5,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[228px] h-[228px] xl:w-[428px] xl:h-[428px] mix-blend-lighten"
        >
          <Image
            src={"/assets/foto.png"}
            priority
            quality={100}
            fill
            alt="Profile Photo"
            className="object-contain rounded-full scale-110"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfilePhoto;
