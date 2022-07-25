import { MouseEvent, useState } from "react";
import styles from "./canvas.styles";

const Canvas = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mouseLeave, setMouseLeave] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const onMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const onMouseLeave = () => {
    setMouseLeave(true);
  };

  const onMouseEnter = () => {
    setMouseLeave(false);
  };

  const onMouseDown = () => {
    setMouseDown(true);
  };

  const onMouseUp = () => {
    setMouseDown(false);
  };

  return (
    <div className={styles.container}>
      <canvas
        width="1920"
        height="1080"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      ></canvas>
    </div>
  );
};

export default Canvas;
