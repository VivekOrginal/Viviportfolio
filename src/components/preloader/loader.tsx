"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePreloader } from ".";
import { slideUp, opacity } from "./anim";
import styles from "./style.module.scss";

export default function Loader() {
  const { loadingPercent } = usePreloader();

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      <motion.div
        variants={opacity}
        initial="initial"
        animate="enter"
        className={styles.imageWrapper}
      >
        <Image
          src="/assets/two-faced-bear.jpeg"
          alt="Two Faced Bear"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </motion.div>
      <motion.p variants={opacity} initial="initial" animate="enter">
        {Math.round(loadingPercent)}%
      </motion.p>
    </motion.div>
  );
}
