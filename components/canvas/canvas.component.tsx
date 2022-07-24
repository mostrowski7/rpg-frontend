import styles from "./canvas.styles";

const Canvas = () => {
  return (
    <div className={styles.container}>
      <canvas width="1920" height="1080"></canvas>
    </div>
  );
};

export default Canvas;
