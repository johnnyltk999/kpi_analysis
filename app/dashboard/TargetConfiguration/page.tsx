"use client";
import React from "react";
import { Select, DatePicker, Button, Table, Space, Popconfirm } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SettingOutlined } from "@ant-design/icons";
import Modal from "../../components/Modal";
import Form from "./Form/page";
import type { TableProps } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  kpi: string;
  weight: number;
  Target: number;
  action: string;
}

const Target = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const showModal = () => setOpen(true);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1500);
  };

  const handleCancel = () => setOpen(false);

  // ======= ACTION HANDLERS =======
  const handleEdit = (record: DataType) => {
    console.log("Edit row: ", record);
    setOpen(true);
  };

  const handleDelete = (record: DataType) => {
    console.log("Delete row: ", record);
    alert(`Deleting ${record.kpi}`);
  };

  const columns: TableProps<DataType>["columns"] = [
    { title: "KPI Name", dataIndex: "kpi", key: "kpi" },
    { title: "Weight (%)", dataIndex: "weight", key: "weight" },
    { title: "Target Value", dataIndex: "Target", key: "Target" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleEdit(record)}>
            <EditOutlined />
          </Button>
          <Popconfirm
            title="Are you sure to delete this assignment?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
            placement="topLeft"
          >
            <Button type="link" danger>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // Mock data
  const mockData: DataType[] = [
    {
      key: "1",
      kpi: "Quality of Work",
      weight: 40,
      Target: 90,
      action: "",
    },
    {
      key: "2",
      kpi: "Team Contribution",
      weight: 30,
      Target: 85,
      action: "",
    },
    {
      key: "3",
      kpi: "Attendance",
      weight: 20,
      Target: 100,
      action: "",
    },
    {
      key: "4",
      kpi: "Leadership",
      weight: 10,
      Target: 95,
      action: "",
    },
  ];

  return (
    <>
      <div className="text-2xl font-bold">
        {" "}
        <SettingOutlined style={{ fontSize: "24px", color: "#08c" }} /> Target
        Configuration
      </div>
      <div className="p-4 w-full bg-white rounded-md shadow-md">
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Select Month</label>
            <DatePicker className="w-[230px]" placeholder="ເລືອກເດືອນ" />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Posision Group</label>
            <Select
              showSearch
              className="w-[200px]"
              placeholder="ເລືອກກຸ່ມ"
              // options={[
              //   { value: "ລາຍການຄ່າແນະນຳ", label: "ລາຍການຄ່າແນະນຳ" },
              //   { value: "ຂໍ້ມູນຜູ້ແນະນຳ", label: "ຂໍ້ມູນຜູ້ແນະນຳ" },
              // ]}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Button type="primary" className="w-[120px]">
              <SearchOutlined /> ຄົ້ນຫາ
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-end m-4">
          <Button type="primary" onClick={showModal}>
            + Add new Target
          </Button>
        </div>
        <Table columns={columns} dataSource={mockData} size="small" />
        <Modal
          open={open}
          title="New Target Configuration"
          loading={loading}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form />
        </Modal>
      </div>
      <div className="flex justify-end m-4 gap-3">
        {/* <Button color="default" variant="filled">
          Reset Default
        </Button> */}
        <Button color="primary" variant="filled">
          Reset Default
        </Button>
        <Button type="primary">+ Save Configuration</Button>
      </div>
    </>
  );
};

export default Target;
