import React from "react";
import { PieChartOutlined } from "@ant-design/icons";

function Dashboard() {
  return (
    <>
      <div className="text-2xl font-bold">
        {" "}
        <PieChartOutlined style={{ fontSize: "24px", color: "#08c" }} />{" "}
        Performance Dashboard
      </div>
    </>
  );
}

export default Dashboard;
