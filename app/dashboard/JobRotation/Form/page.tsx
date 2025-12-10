import React from "react";
import { Button, Form, Input, Select, Row, Col, DatePicker } from "antd";
const { RangePicker } = DatePicker;
const App: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ padding: "20px", maxWidth: 1000, margin: "0 auto" }}
    >
      {/* ແຖວທີ 1 */}
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="Employee Name"
            name="employeeName"
            rules={[{ required: true }]}
          >
            <Input placeholder="ປ້ອນຊື່ພະນັກງານ" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="Previous Role (Reference)"
            name="previousRole"
            rules={[{ required: true }]}
          >
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
              ]}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="New Role / Position"
            name="newRole"
            rules={[{ required: true }]}
          >
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* ແຖວທີ 2 */}
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="Department Code"
            name="DepartmentCode"
            rules={[{ required: true }]}
          >
            <Input placeholder="ປ້ອນລະຫັດ" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="ວັນທີເລີ່ມຕົ້ນ ແລະ ສິ້ນສຸດ"
            name="dateRange"
            rules={[{ required: true }]}
          >
            <RangePicker />
          </Form.Item>
        </Col>
      </Row>

      {/* ปุ่ม Submit */}
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default App;
