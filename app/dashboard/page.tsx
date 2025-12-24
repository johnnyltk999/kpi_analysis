"use client";

import {
  PieChartOutlined,
  FilterOutlined,
  ReloadOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Card, Row, Col, Select, Button } from "antd";
import Pie from "../charts/Pie";
import Column from "../charts/Column";
import Liquid from "../charts/Liquid";
import Line from "../charts/Line";
import Radar from "../charts/Radar";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Kpi_detail from "../components/Kpi_detail";
import Modal from "../components/Modal";

function Dashboard() {
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<string>("");

  const showModal = () => setOpen(true);

  const handleCancel = () => setOpen(false);

  const enterLoading = (index: number) => {
    console.log("Start loading:", index);

    setLoadings((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
    setLastRefreshed(getCurrentTime());

    router.refresh();

    setTimeout(() => {
      setLoadings((prev) => {
        const updated = [...prev];
        updated[index] = false;
        return updated;
      });
    }, 1000);
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

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

      <div className="m-4 flex">
        Data Source: SQL View Consolidation | Last Refreshed:{" "}
        <span className="ml-1 font-medium">
          {lastRefreshed ? `Today ${lastRefreshed}` : "-"}
        </span>
        <div className="ml-5 flex justify-end flex-1">
          <Button
            color="cyan"
            variant="solid"
            icon={<ReloadOutlined />}
            loading={loadings[3] && { icon: <SyncOutlined spin /> }}
            onClick={() => enterLoading(3)}
          >
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {/* 1 */}
        <div className="border-l-4 border-blue-400 bg-white p-4 rounded shadow-sm">
          <span className="text-sm text-gray-600">1. ການລວມຄະແນນປະເມີນ</span>
          <h1 className="font-bold text-3xl mt-2">15.11</h1>
        </div>

        {/* 2 */}
        <div className="border-l-4 border-blue-400 bg-white p-4 rounded shadow-sm">
          <span className="text-sm text-gray-600">
            2. ລວມຄະແນນ KPI ຕາມໜ້າວຽກ
          </span>
          <h1 className="font-bold text-3xl mt-2">37.80</h1>
        </div>

        {/* 3 */}
        <div className="border-l-4 border-purple-400 bg-white p-4 rounded shadow-sm">
          <span className="text-sm text-gray-600">3. ພຶດຕິກຳ SMART CMI</span>
          <h1 className="font-bold text-3xl mt-2">55.00</h1>
        </div>

        {/* 4 */}
        <div className="border-l-4 border-orange-400 bg-white p-4 rounded shadow-sm">
          <span className="text-sm text-gray-600">4. ຄະແນນ KPI + ໂຄງການ</span>
          <h1 className="font-bold text-3xl mt-2">00.00</h1>
        </div>

        {/* 5 */}
        <div className="border-l-4 border-green-400 bg-white p-4 rounded shadow-sm">
          <span className="text-sm text-gray-600">
            5. ລວມຄະແນນປະເມີນສຸດທ້າຍ
          </span>
          <h1 className="font-bold text-3xl mt-2">29.10</h1>
        </div>

        {/* 6 */}
        <div className="border-l-4 border-green-400 bg-white p-4 rounded shadow-sm flex flex-col">
          <span className="text-sm text-gray-600">6. ຈັດປະເພດ</span>

          <div className="flex justify-between">
            <h1 className="font-bold text-3xl mt-2 text-green-400">
              ດີເດັ່ນປະເພດ 3
            </h1>
            <div className=" flex mt-4 justify-end ">
              <Button
                color="primary"
                variant="filled"
                shape="round"
                onClick={showModal}
              >
                Detail &gt;
              </Button>
            </div>
          </div>
          <Modal
            open={open}
            title=" KPI Detail Breakdown"
            onCancel={handleCancel}
          >
            <Kpi_detail />
          </Modal>
        </div>
      </div>

      <Row gutter={[12, 12]}>
        {/* Pie Chart */}
        <Col xs={24} sm={12}>
          <Card
            size="small"
            title="Overall Performance"
            styles={{ body: { padding: "12px", height: "220px" } }}
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
                styles={{ body: { padding: "12px", height: "220px" } }}
              >
                <Radar />
              </Card>
            </Col>
            <Col xs={12}>
              <Card
                size="small"
                title="Completion Rate"
                styles={{ body: { padding: "12px", height: "220px" } }}
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
            styles={{ body: { padding: "12px", height: "220px" } }}
          >
            <Column />
          </Card>
        </Col>

        {/* Line Chart */}
        <Col xs={24} sm={12}>
          <Card
            size="small"
            title="Progress Trend"
            styles={{ body: { padding: "12px", height: "220px" } }}
          >
            <Line />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
