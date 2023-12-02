"use client";

import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import "../style/footer.scss";

interface FooterProps {
  showDialog: () => void;
}
const Footer: React.FC<FooterProps> = ({ showDialog }) => {
  return (
    <footer className="footer bottom-0 left-0 w-full text-slate-400">
      <div className="flex justify-center">
        <div className="text-3xl">
          <PlusCircleOutlined onClick={() => showDialog()} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
