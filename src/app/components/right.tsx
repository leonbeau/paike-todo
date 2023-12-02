import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import "../style/right.scss";

interface RightProps {
  activeId: number | null;
  finishTodoItem: (id: number | null) => void;
}
const Right: React.FC<RightProps> = ({ activeId, finishTodoItem }) => {
  return (
    <div className="right text-slate-100">
      <CheckCircleOutlined onClick={() => finishTodoItem(activeId)} />
    </div>
  );
};

export default Right;
