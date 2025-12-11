"use client";
import { Liquid } from "@ant-design/plots";
import React from "react";
import { createRoot } from "react-dom/client";

const DemoLiquid = () => {
  const config = {
    percent: 0.3,
    style: {
      outlineBorder: 4,
      outlineDistance: 8,
      waveLength: 128,
    },
  };
  return <Liquid {...config} />;
};

// createRoot(document.getElementById('container')).render(<DemoLiquid />);
const container = document.getElementById("container");
if (container) {
  createRoot(container).render(<DemoLiquid />);
}

export default DemoLiquid;
