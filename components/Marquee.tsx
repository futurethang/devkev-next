import React, { ReactNode } from "react";
import styles from "../styles/Marquee.module.css";

const Marquee = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.marquee}>
      <div className={styles.marquee__content}>{children}</div>
    </div>
  );
};

export default Marquee;
