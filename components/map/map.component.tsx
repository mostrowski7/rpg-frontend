import styles from "./map.styles";
import { Canvas, Tools } from "components";

const Map = () => {
  return (
    <div className={styles.container}>
      <Canvas />
      <Tools />
    </div>
  );
};

export default Map;
