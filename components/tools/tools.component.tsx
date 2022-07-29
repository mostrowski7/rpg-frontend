import ToolItem from "./tool-item/tool-item.component";
import styles from "./tools.styles";
import { PencilIcon } from "@heroicons/react/outline";
import { Tool } from "./tools.enums";
import { useState } from "react";

const Tools = () => {
  const [selectedTool, setSelectedTool] = useState<Tool>(Tool.Pen);

  const handleSelectTool = (tool: Tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className={styles.container}>
      <ToolItem
        Icon={PencilIcon}
        name={Tool.Pen}
        selectedTool={selectedTool}
        handleSelectTool={handleSelectTool}
      />
    </div>
  );
};

export default Tools;
