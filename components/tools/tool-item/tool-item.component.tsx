import { ToolItemProps } from "./tool-item.interfaces";
import styles from "./tool-item.styles";

const ToolItem = ({ Icon, handleSelectTool, name, selectedTool }: ToolItemProps) => {
  return (
    <div className={styles.container}>
      <Icon
        className={name === selectedTool ? styles.selectedTool : styles.tool}
        onClick={() => handleSelectTool(name)}
      />
    </div>
  );
};

export default ToolItem;
