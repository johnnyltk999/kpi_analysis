"use client";
import { Pie } from "@ant-design/plots";

const DemoPie = () => {
  const config = {
    data: [
      { type: "KPI1", value: 27 },
      { type: "KPI2", value: 25 },
      { type: "KPI3", value: 18 },
      { type: "KPI4", value: 68 },
    ],
    angleField: "value",
    colorField: "type",
    label: {
      text: "value",
      position: "outside",
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;
