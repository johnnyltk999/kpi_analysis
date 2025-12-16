"use client";
import React from "react";
import {
  UploadOutlined,
  InboxOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Select,
  Row,
  Col,
  DatePicker,
  InputNumber,
  Card,
  Upload,
  message,
  Tag,
} from "antd";
import type { UploadProps } from "antd";

const { TextArea } = Input;
const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function DataEntry() {
  const [form] = Form.useForm();

  return (
    <>
      {/* Title */}
      <div className="text-2xl font-bold mb-6 flex items-center gap-2">
        <UploadOutlined style={{ fontSize: 24, color: "#08c" }} />
        Data Entry & Consolidation
      </div>

      <Row gutter={24}>
        {/* ===== LEFT : FORM ===== */}
        <Col span={14}>
          <Card>
            <div className="flex items-center justify-between pb-4">
              <p>Manual Transaction</p>

              <Tag color="blue">Single Record</Tag>
            </div>
            <Form form={form} layout="vertical">
              {/* Row 1 */}
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label="Employee ID"
                    name="employeeID"
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="ປ້ອນລະຫັດພະນັກງານ" />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label="Transaction Type"
                    name="TransactionType"
                    rules={[{ required: true }]}
                  >
                    <Select style={{ width: "100%" }} />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label="Date"
                    name="Date"
                    rules={[{ required: true }]}
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>

              {/* Row 2 */}
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label="value/Score"
                    name="valueScore"
                    rules={[{ required: true }]}
                  >
                    <InputNumber placeholder="0.00" style={{ width: "100%" }} />
                  </Form.Item>
                </Col>

                <Col span={16}>
                  <Form.Item
                    label="Notes / Reference"
                    name="NotesReference"
                    rules={[{ required: true }]}
                  >
                    <TextArea rows={2} placeholder="ປ້ອນໝາຍເຫດ" />
                  </Form.Item>
                </Col>
              </Row>

              {/* Submit */}
              <Form.Item style={{ textAlign: "right", marginTop: 24 }}>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* ===== RIGHT : UPLOAD ===== */}
        <Col span={10}>
          <Card>
            {/* Header: Batch Upload + Badge */}
            <div className="flex items-center justify-between pb-4">
              <p className="font-semibold">Batch Upload</p>
              <Tag color="purple" className="font-medium">
                Excel / JSON
              </Tag>
            </div>

            {/* Upload Area */}
            <Dragger {...props} style={{ padding: "24px 0" }}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint text-sm text-gray-500">
                or click to browse files
              </p>
            </Dragger>

            {/* Notice / Info Box */}
            <div className="bg-yellow-100 border-l-4 border-yellow-400 p-3 mt-4 rounded">
              <div className="flex items-center mb-1">
                <InfoCircleOutlined className="text-yellow-700 mr-2" />
                <span className=" text-yellow-800 font-bold">
                  Transaction Safety Rule
                </span>
              </div>
              <p className="text-yellow-800 text-sm">
                System uses &quot;Save All or None&quot; logic. If one row fails
                validation (e.g., Invalid Employee ID), the entire batch will be
                rejected to ensure data integrity.
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default DataEntry;
