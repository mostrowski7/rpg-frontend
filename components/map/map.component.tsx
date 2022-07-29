import styles from "./map.styles";
import { Canvas, Tools } from "components";

export const Map = () => {
  return (
    <div className={styles.container}>
      <Canvas />
      <Tools />
    </div>
  );
};
