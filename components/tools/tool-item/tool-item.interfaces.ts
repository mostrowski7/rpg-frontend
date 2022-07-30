import { Tool } from "../tools.enums";

export interface ToolItemProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: Tool;
  selectedTool: Tool;
  handleSelectTool: (tool: Tool) => void;
}
