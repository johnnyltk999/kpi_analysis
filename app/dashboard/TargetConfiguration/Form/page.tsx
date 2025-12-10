import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Row,
  Col,
  DatePicker,
  Radio,
  InputNumber,
} from "antd";

const App: React.FC = () => {
  const [form] = Form.useForm();

  const [isYearly, setIsYearly] = React.useState(false);

  const onPeriodChange = (value: string) => {
    setIsYearly(value === "yearly");
    form.setFieldValue("selectMonth", null); // reset ເດືອນ/ປີ
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ padding: "20px", maxWidth: 1000, margin: "0 auto" }}
      initialValues={{
        periodType: "monthly", // 👈 default value
      }}
    >
      <Form.Item label="Target Period Type" name="periodType">
        <Radio.Group
          onChange={(e) => onPeriodChange(e.target.value)}
          optionType="button"
          buttonStyle="solid"
        >
          <Radio.Button value="monthly">Monthly Target</Radio.Button>
          <Radio.Button value="yearly">Yearly Target</Radio.Button>
        </Radio.Group>
      </Form.Item>

      {/* Row 1 */}
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label={isYearly ? "Select Year" : "Select Month"}
            name="selectMonth"
            rules={[{ required: true }]}
          >
            <DatePicker
              picker={isYearly ? "year" : "month"}
              placeholder={isYearly ? "ເລືອກປີ" : "ເລືອກເດືອນ"}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Position Group"
            name="posisionGroup"
            rules={[{ required: true }]}
          >
            <Select style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label="KPI Name"
            name="kpiName"
            rules={[{ required: true }]}
          >
            <Input placeholder="ປ້ອນຊື່ KPI" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="KPI Code (Reference)"
            name="kpiCode"
            rules={[{ required: true }]}
          >
            <Input placeholder="ປ້ອນລະຫັດ KPI" />
          </Form.Item>
        </Col>
      </Row>

      {/* Row 3 */}
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label="Weight (%)"
            name="weight"
            rules={[{ required: true }]}
          >
            <InputNumber placeholder="ປ້ອນນ້ຳໜັກ" style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Target Value"
            name="targetValue"
            rules={[{ required: true }]}
          >
            <InputNumber placeholder="ປ້ອນເປົ້າໝາຍ" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      {/* Submit */}
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default App;
