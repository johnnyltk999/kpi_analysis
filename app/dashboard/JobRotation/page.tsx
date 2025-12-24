"use client";

import React from "react";
import { Table, Tag, Button, Space, Popconfirm } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import { useState } from "react";
import Form from "./Form/page";
import Modal from "../../components/Modal";
import type { TableProps } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { withAuth } from "../../components/withAuth";

interface DataType {
  key: string;
  employee: string;
  previousRole: string;
  newRole: string;
  effectDate: string;
  endDate: string;
  status: string;
  action: string;
}

function JobRotation() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  // ======= ACTION HANDLERS =======
  const handleEdit = (record: DataType) => {
    console.log("Edit row: ", record);
    setOpen(true);
  };

  const handleDelete = (record: DataType) => {
    console.log("Delete row: ", record);
    alert(`Deleting ${record.employee}`);
  };

  // ====== COLUMNS ======
  const columns: TableProps<DataType>["columns"] = [
    { title: "Employee", dataIndex: "employee", key: "employee" },
    { title: "Previous Role", dataIndex: "previousRole", key: "previousRole" },
    { title: "New Role", dataIndex: "newRole", key: "newRole" },
    { title: "Effect Date", dataIndex: "effectDate", key: "effectDate" },
    { title: "End Date", dataIndex: "endDate", key: "endDate" },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const tag = status.toLowerCase();
        const color = tag === "active" ? "green" : "volcano";
        return <Tag color={color}>{tag.toUpperCase()}</Tag>;
      },
    },

    {
      title: "Action",
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

  const data: DataType[] = [
    {
      key: "1",
      employee: "John Doe",
      previousRole: "Junior Developer",
      newRole: "Mid-level Developer",
      effectDate: "2025-12-01",
      endDate: "2026-11-30",
      status: "active",
      action: "",
    },
    {
      key: "2",
      employee: "Jane Smith",
      previousRole: "HR Assistant",
      newRole: "HR Specialist",
      effectDate: "2025-11-15",
      endDate: "2026-11-14",
      status: "active",
      action: "",
    },
    {
      key: "3",
      employee: "Michael Brown",
      previousRole: "Sales Intern",
      newRole: "Sales Executive",
      effectDate: "2025-10-01",
      endDate: "2026-09-30",
      status: "inactive",
      action: "",
    },
  ];

  const showModal = () => setOpen(true);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1500);
  };

  const handleCancel = () => setOpen(false);

  return (
    <>
      <div className="text-2xl font-bold flex items-center">
        <TeamOutlined style={{ fontSize: "24px", color: "#08c" }} /> Job
        Rotation
      </div>

      <div className="m-4">
        Manage employee movements. System uses SCD Type 2 logic to track history
        and pro-rate KPI calculations.
      </div>

      <div className="flex justify-end m-4">
        <Button type="primary" onClick={showModal}>
          + New Assignment
        </Button>
      </div>

      <div className="p-4">
        <Table<DataType> columns={columns} dataSource={data} size="small" />

        <Modal
          open={open}
          title="New Job Rotation Assignment"
          loading={loading}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form />
        </Modal>
      </div>
    </>
  );
}

export default withAuth(JobRotation, { allowedRoles: ["admin"] });
