"use client";

import React, { useState } from "react";
import "../style/dialog.scss";
import { Input, Select } from "antd";
import type { SelectProps } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { TodoInfo } from "../page";

const { TextArea } = Input;

const options: SelectProps["options"] = [];

interface DialogProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (params: TodoInfo) => void;
}

const INITIAL_PARAMS = {
  title: "",
  description: "",
  tags: [],
  level: 1,
};

const Dialog: React.FC<DialogProps> = ({ visible, onCancel, onSubmit }) => {
  const [params, setParams] = useState<TodoInfo>(INITIAL_PARAMS);

  const toSubmit = () => {
    onSubmit(params);
    setParams(INITIAL_PARAMS);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setParams({ ...params, title: e.target.value });
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setParams({ ...params, description: e.target.value });
  const handleTagsChange = (val: string[]) => setParams({ ...params, tags: [...val] });
  const handleLevelChange = (level: number) => setParams({ ...params, level });

  return (
    <>
      {visible && (
        <div className="modal-overlay shadow-sm">
          <div className="modal-content">
            <div>
              <Input
                value={params.title}
                onChange={handleTitleChange}
                className="custom-input"
                placeholder="Take dog out on walk"
              />
              <TextArea
                value={params.description}
                onChange={handleDescriptionChange}
                className="custom-input"
                placeholder="He needs vaccine shot too"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
              <Select
                value={params.tags}
                className="custom-input"
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Tags"
                onChange={handleTagsChange}
                options={options}
              />

              <div className="level text-gray-400">
                {[1, 2, 3, 4].map((level) => (
                  <span
                    key={level}
                    className={params.level === level ? "active" : ""}
                    onClick={() => handleLevelChange(level)}
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="flex justify-center">
              <div className="text-3xl text-slate-400">
                <CloseCircleOutlined
                  className="mr-3"
                  onClick={() => onCancel()}
                />
                <CheckCircleOutlined onClick={() => toSubmit()} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
