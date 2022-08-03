import { ReactNode } from "react";
import styles from "./layout.styles";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};
