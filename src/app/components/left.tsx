import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import "../style/left.scss";

interface LeftProps {
  removeTodoItem: () => void;
}

const Left: React.FC<LeftProps> = ({ removeTodoItem }) => {
  return (
    <div className="left text-slate-100">
      <DeleteOutlined onClick={() => removeTodoItem()} />
    </div>
  );
};

export default Left;
