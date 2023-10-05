// components/Header.js

import Link from "next/link";
import styles from "@/styles/Home.module.css";

function Header() {
  return (
    <>
      <div className={styles.subPage}>
        <Link href={"/"}>
          <h1>
            <span className="kern">K</span>evin Hyde
          </h1>
        </Link>
      </div>
      {/* <Nav /> */}
    </>
  );
}

export default Header;
