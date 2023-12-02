import React from "react";
import "../style/card.scss";
import { TodoInfo } from "../page";

interface CardParams {
  item: TodoInfo;
  activeId: number | null;
  setActiveId: (id: number) => void;
}

const Card: React.FC<CardParams> = ({ item, activeId, setActiveId }) => {
  return (
    <div
      className={`container shadow-sm ${activeId === item._id ? "active" : ""}`}
      onClick={() => setActiveId(item?._id as number)}
    >
      <div className="header mb-3 gray-700 text-2xl font-bold line-clamp-1">
        {item?.title}
      </div>
      <div
        className={`mb-3 text-gray-500 ${
          activeId === item._id ? "line-clamp-5" : "line-clamp-2"
        }`}
      >
        {item?.description}
      </div>
      <div>
        <span className="tag text-rose-600 bg-rose-50 mr-3">
          P{item?.level}
        </span>
        {item?.tags?.map((it) => (
          <span key={it} className="tag text-green-600 bg-green-50 mr-3">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
