"use client";
import { Column } from "@ant-design/plots";
import React from "react";
import { createRoot } from "react-dom/client";

const DemoColumn = () => {
  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json",
    },
    xField: "月份",
    yField: "月均降雨量",
    colorField: "name",
    group: {
      padding: 0,
    },
  };
  return <Column {...config} />;
};

const container = document.getElementById("container");
if (container) {
  createRoot(container).render(<DemoColumn />);
}

export default DemoColumn;
