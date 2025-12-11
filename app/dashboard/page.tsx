// import React from "react";
// import { PieChartOutlined } from "@ant-design/icons";
// import Pie from "../charts/Pie";
// import Column from "../charts/Column";
// function Dashboard() {
//   return (
//     <>
//       <div className="text-2xl font-bold">
//         {" "}
//         <PieChartOutlined style={{ fontSize: "24px", color: "#08c" }} />{" "}
//         Performance Dashboard
//       </div>
//       <Pie></Pie>
//       <Column></Column>
//     </>
//   );
// }

// export default Dashboard;

import React from "react";
import { PieChartOutlined, FilterOutlined } from "@ant-design/icons";
import { Card, Row, Col, Select } from "antd";
import Pie from "../charts/Pie";
import Column from "../charts/Column";
import Liquid from "../charts/Liquid";
import Line from "../charts/Line";
import Radar from "../charts/Radar";

function Dashboard() {
  return (
    <>
      <div className="flex items-center gap-3 ">
        <PieChartOutlined style={{ fontSize: "28px", color: "#08c" }} />
        <p className="text-2xl font-bold mb-2">Performance Dashboard</p>

        <div className="flex-1">
          <div className=" flex gap-3 justify-end ">
            <FilterOutlined />
            <div>
              <Select
                defaultValue="2024"
                style={{ width: 120 }}
                options={[
                  { value: "2024", label: "2024" },
                  { value: "2025", label: "2025" },
                  { value: "2026", label: "2026" },
                ]}
              />
            </div>
            <div>
              <Select
                defaultValue="January"
                style={{ width: 140 }}
                options={[
                  { value: "January", label: "January" },
                  { value: "February", label: "February" },
                  { value: "March", label: "March" },
                  { value: "April", label: "April" },
                  { value: "May", label: "May" },
                  { value: "June", label: "June" },
                  { value: "July", label: "July" },
                  { value: "August", label: "August" },
                  { value: "September", label: "September" },
                  { value: "October", label: "October" },
                  { value: "November", label: "November" },
                  { value: "December", label: "December" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="m-4">
        Data Source: SQL View Consolidation | Last Refreshed: Today 10:30 AM
      </div>

      <Row gutter={[12, 12]}>
        {/* Pie Chart */}
        <Col xs={24} sm={12}>
          <Card
            size="small"
            title="Overall Performance"
            bodyStyle={{ padding: "12px", height: "220px" }}
          >
            <Pie />
          </Card>
        </Col>

        {/* Radar + Liquid */}
        <Col xs={24} sm={12}>
          <Row gutter={[12, 12]}>
            <Col xs={12}>
              <Card
                size="small"
                title="Skill Radar"
                bodyStyle={{ padding: "12px", height: "220px" }}
              >
                <Radar />
              </Card>
            </Col>
            <Col xs={12}>
              <Card
                size="small"
                title="Completion Rate"
                bodyStyle={{ padding: "12px", height: "220px" }}
              >
                <Liquid />
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Column Chart */}
        <Col xs={24} sm={12}>
          <Card
            size="small"
            title="Monthly KPI"
            bodyStyle={{ padding: "12px", height: "220px" }}
          >
            <Column />
          </Card>
        </Col>

        {/* Line Chart */}
        <Col xs={24} sm={12}>
          <Card
            size="small"
            title="Progress Trend"
            bodyStyle={{ padding: "12px", height: "220px" }}
          >
            <Line />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
