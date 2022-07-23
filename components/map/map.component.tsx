import styles from "./map.styles";
import { Canvas } from "components";

const Map = () => {
  return (
    <div className={styles.container}>
      <Canvas />
    </div>
  );
};

export default Map;
